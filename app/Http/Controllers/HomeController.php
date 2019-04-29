<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function banco()
    {
        return [
            ['id_banco' => 1], 
            ['nb_banco' => 'Venezuela'] 
        ];
    }

    public function OfertaComercial()
    {
        return [
            [
                ['id_oferta_comercial' => 1], 
                ['nu_oferta'  => '001'],
                ['fe_oferta'  => '2019-01-01'],
                ['fe_validez' => '2019-01-01'],
                ['nu_doc_condiciones' => '001'] 
            ],
            [
                ['id_oferta_comercial' => 2], 
                ['nu_oferta_comercial'  => '002'],
                ['fe_oferta_comercial'  => '2019-02-02'],
                ['fe_validez' => '2019-02-02'],
                ['nu_doc_condiciones' => '002'] 
            ],
        ];
    }
}
