const dataTextField = {
    who: [
        {
            label: 'Nome da Loja/Vendedor',
            id: 'name_store',
            model: 'text'
        },
        {
            label: 'Número da Loja/Vendedor',
            id: 'phone_store',
            model: 'text',
            mask: true,
            name: 'phone',
            placeholder: '(00) 9 1234-0987',
        },
    ],
    idependent: [
        {
            title: 'Autônomo',
            label: 'Trabalha com o que como Autônomo?',
            subtitle: 'Especifique com o que você trabalha.',
            id: 'independent_job',
            model: 'text'
        },
        {
            label: 'Renda',
            model: 'number',
            id: 'income_idependent',
            especial: 'coin'
        },
    ],
    publicHired: [
        {
            public: 'Funcionário Público:',
            hired: 'Assalariado', 
            label: 'Nome da Empresa em que trabalha:',
            id: 'name_company',
            model: 'text'
        },
        {
            label: 'Endereço da Empresa:',
            id: 'adress_company',
            model: 'text'
        },
        {
            label: 'Telefone da Empresa:',
            id: 'contact_company',
            model: 'text',
            mask: true,
            name: 'phone',
            placeholder: '(00) 9 1234-0987',
        },
        {
            label: 'Renda',
            model: 'number',
            id: 'income_publicHired',
            especial: 'coin'
        },
    ],
    another: [
        {
            label: 'Profissional de outra área, favor informar',
            id: 'outher_area',
            model: 'text'
        },
    ],
    manager: [
        {
            title: 'Empresário(a):',
            subtitle: 'Caso tenha mais de um CNPJ, informar o principal',
            label: 'Informar o CNPJ da Empresa',
            placeholder: '12.345.678/0001-23',

            id: 'cnpj_company_manager',
            model: 'text',
            mask: true,
            name: 'cnpj',
        },
        {
            label: 'Renda',
            model: 'number',
            id: 'income',
            especial: 'coin'
        },
    ],
    personalData: [
        {
            label: 'CPF',
            id: 'cpf',
            model: 'text',
            mask: true,
            name: 'cpf',
            placeholder: '123.456.789-00'
        },
        {
            label: 'Nome Completo',
            id: 'name',
            model: 'text'
        },
        {
            label: 'Data de Nascimento',
            id: 'date',
            model: 'text',
            mask: true,
            name: 'date',
            placeholder: '12/12/1900',
        },
        {
            label: 'RG',
            id: 'rg',
            model: 'text'
        },
        {
            label: 'Filiação - Nome da Mãe',
            id: 'affiliation',
            model: 'text'
        },
        {
            label: 'CEP Residencial',
            id: 'cep',
            model: 'text',
            mask: true,
            name: 'cep',
            placeholder: '12345-001',
            message: 'Por favor digite um CEP válido',
        },
        {
            label: 'Rua',
            id: 'logradouro',
            model: 'text',
            prototype: 'json',
        },
        {
            label: 'N°',
            id: 'number',
            model: 'number',
        },
        {
            label: 'Bairro',
            id: 'bairro',
            model: 'text',
            prototype: 'json',
        },
        {
            label: 'Complemento',
            id: 'complemento',
            model: 'text',
            prototype: 'json',
        },
        {
            label: 'Cidade',
            id: 'localidade',
            model: 'text',
            prototype: 'json',
        },
        {
            label: 'Celular',
            subtitle: 'Celular válido pertencente ao cliente',
            id: 'phone',
            model: 'text',
            mask: true,
            name: 'phone',
            placeholder: '(00) 9 1234-0987',
        },
        {
            label: 'E-mail',
            subtitle: 'E-mail válido pertencente ao cliente',
            id: 'email',
            model: 'email'
        },
    ],
    replaced: [
        {
            label: 'Placa',
            subtitle: 'Informação indispensável quando se trata de veículos usados',
            id: 'license_plate',
            model: 'text'
        }
    ],
    datasVehicle: [
        {
            label: 'Ano de Fabricação',
            id: 'year_manufacture',
            model: 'number'
        },
        {
            label: 'Ano do Modelo',
            id: 'year_model',
            model: 'number'
        },
        {
            label: 'Marca do Veículo',
            id: 'vehicle_brand',
            model: 'text'
        },
        {
            label: 'Modelo do Veículo',
            id: 'model_vehicle',
            model: 'text'
        },
        {
            label: 'Versão do Veículo',
            id: 'version_vehicle',
            model: 'text'
        },
    ],
    priceValues: [
        {
            label: 'Valor do Veículo',
            id: 'vehicle_value',
            model: 'number',
        },
        {
            label: 'Valor de Entrada',
            id: 'input_value',
            model: 'number',
        },
        {
            label: 'Valor do Financiamento',
            id: 'amount_financed',
            model: 'number',
            disabled: true,
        }
    ]
};

export default dataTextField;