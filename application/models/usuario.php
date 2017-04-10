<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class usuario extends CI_Model {

	public function listar()
	{
		$Monitores=array();

		$this->db->select('*');
		$this->db->order_by('Nombre ASC');
		$this->db->from('usuarios');
		$retorno=$this->db->get();
		$Monitores=$retorno->result_array();

		return $Monitores;
	}
	public function actualizar($id, $Nombre, $email)
	{

		$this->db->from('usuarios');
    $this->db->where('id', $id);
		$this->db->update('usuarios', array(
				"Nombre"=>$Nombre,
				"email"=>$email));
	}
	public function Eliminar($id)
 {
	 $this->db->where('id', $id);
	 $this->db->delete('usuarios');
 }

	public function guardar($Nombre, $email)
	{
		$retorno=false;
    $this->db->select('count(*) as cantidad');
		$this->db->from('usuarios');
		$this->db->where('id', NULL);
		$result=$this->db->get();
		$cantidad=$result->result_array();
		if($cantidad[0]["cantidad"]==0){
			$this->db->insert('usuarios', array(
				"Nombre"=>$Nombre,
				"email"=>$email));

			$retorno=true;
		}
		return $retorno;
	}

}
