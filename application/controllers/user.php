<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class user extends CI_Controller {


	public function index()
	{
    	$this->load->view('index');

	}
	public function listar()
	{
		$this->load->model("usuario");
		$Monitores=$this->usuario->listar();
    echo json_encode(array('data' => $Monitores));
	}

	public function add()
	{
		$data = json_decode($_POST['data']);
		$this->load->model("usuario");
		$this->usuario->guardar($data->Nombre,$data->email);
	}

	public function update()
	{
		$data = json_decode($_POST['data']);
		$this->load->model("usuario");
		$this->usuario->actualizar($data->id,$data->Nombre,$data->email);
	}

	public function delete()
	{
		$data = json_decode($_POST['data']);
		$this->load->model("usuario");
		if (is_array($data)) {
			for ($i=0; $i <count($data) ; $i++) {
    		  $this->usuario->Eliminar($data[$i]->id);
    		}
		}else{
			  $this->usuario->Eliminar($data->id);
		}

	}

}
