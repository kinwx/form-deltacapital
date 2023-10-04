const DataSelectContent = {
    quemEnvia: [{
        title: 'Quem está enviando o cadastro?',
        name: 'user',
        placeholder: 'Opções',
        openOutherBox: true,
        listSelect: [
            {
                value: 'Loja Cadastrada',
                boolean: true
            },
            {
                value: 'Vendedor Autônomo',
                boolean: true
            },
            {
                value: 'Cliente',
                boolean: false
            }
        ],
    }],
    operator: [{
        title: 'Você é atendido por qual Operador?',
        subtitle: 'O formulário será direcionado para Oparador.',
        name: 'name_operator',
        placeholder: 'Operador',
        listSelect: [
            {
                value: 'Sem Operador Definido',
            },
            {
                value: 'Ivo Junior'
            },
            {
                value: 'Tarsiano Malveira'
            },
            {
                value: 'Monalisa Brito'
            },
            {
                value: 'Ribamar Silva'
            },
            {
                value: 'Carla Biaconi'
            },
            {
                value: 'Thiago Ferreira'
            },
        ]
    }],
    atividadeProf: [{
        title: 'Atividade Profissional',
        name: 'professional',
        listRadio: [
            {
                id: 'manager',
                value: 'Empresário(a)',
            },
            {
                id: 'hired',
                value: 'Assalariado',
                span: 'Carteira Assinada'
            },
            {
                id: 'independent',
                value: 'Autônomo',
            },
            {
                id: 'graduate',
                value: 'Profissional Liberal',
                span: 'Advogados, Médicos, Engenheiros, demais atividades com conselho e regulamentação profissional'
            },
            {
                id: 'public',
                value: 'Funcionário(a) Público',
                span: 'Concursado - Cargos comissionados não se enquadram'
            },
            {
                id: 'retired',
                value: 'Aposentado ou Pensionista',
            },
        ],
    }],
    profLiberal: [{
        title: 'Profissional Liberal',
        name: 'profession',
        placeholder: 'Profissional Liberal',
        openOutherBox: true,
        listSelect: [
            {
                value: 'Médico(a)',
                boolean: false
            },
            {
                value: 'Advogado(a)',
                boolean: false
            },
            {
                value: 'Engenheiro(a)',
                boolean: false
            },
            {
                value: 'Dentista',
                boolean: false
            },
            {
                value: 'Contador(a)',
                boolean: false
            },
            {
                value: 'Arquiteto(a)',
                boolean: false
            },
            {
                value: 'Comerciário',
                boolean: false
            },
            {
                value: 'Fisioterapeuta',
                boolean: false
            },
            {
                value: 'Fonoaudiólogo(a)',
                boolean: false
            },
            {
                value: 'Psicólogo(a)',
                boolean: false
            },
            {
                value: 'Professores(as)',
                boolean: false
            },
            {
                value: 'Terapeuta Ocupacional',
                boolean: false
            },
            {
                value: 'Enfermeiros(as)',
                boolean: false
            },
            {
                value: 'Técnicos de Enfermagem',
                boolean: false
            },
            {
                value: 'Nutricionista',
                boolean: false
            },
            {
                value: 'Outros Profissionais Liberais',
                boolean: true
            },
        ]
    }],
    habilited: [{
        title: 'Cliente tem habilitação?',
        name: 'able',
        placeholder: 'Habilitado?',
        listSelect: [
            {
                value: 'Sim',
            },
            {
                value: 'Não',
            },
        ]
    }],
    plate: [{
        title: 'Dados do Veículo',
        name: 'vehicle',
        placeholder: 'Dados do Veículo',
        openOutherBox: true,
        listSelect: [
            {
                value: 'Veículo 0Km',
                boolean: false
            },
            {
                value: 'Veículo Usado',
                boolean: true
            },
        ]
    }],
    motor: [{
        title: 'Motor',
        name: 'motor',
        openOutherBox: true,
        placeholder: 'Motores',
        listSelect: [
            {
                value: '1.0',
                boolean: false,
            },
            {
                value: '1.3',
                boolean: false,
            },
            {
                value: '1.6',
                boolean: false,
            },
            {
                value: '1.8',
                boolean: false,
            },
            {
                value: '2.0',
                boolean: false,
            },
            {
                value: '3.0',
                boolean: false,
            },
            {
                value: '4.0',
                boolean: false,
            },
            {
                value: '5.0',
                boolean: false,
            },
            {
                value: 'Outra Motorização',
                boolean: true,
            },
        ]
    }],
    fuel: [{
        title: 'Combustível',
        name: 'fuel',
        placeholder: 'Tipo do Cumbustível',
        listSelect: [
            {
                value: 'Flex',
                resume: 'Gasolina ou Etanol'
            },
            {
                value: 'Diesel'
            },
            {
                value: 'Elétrico'
            },
            {
                value: 'Híbrido'
            },
        ]
    }],
    exchange: [{
        title: 'Câmbio do Veículo',
        name: 'exchange',
        placeholder: 'Câmbio',
        listSelect: [
            {
                value: 'Câmbio Automático'
            },
            {
                value: 'Câmbio Manual'
            },
        ]
    }],
    deadline: [{
        title: 'Prazo Pretendido',
        name: 'deadline',
        openOutherBox: true,
        placeholder: 'Prazo',
        listSelect: [
            {
                value: '12x',
                boolean: false,
            },
            {
                value: '24x',
                boolean: false,
            },
            {
                value: '36x',
                boolean: false,
            },
            {
                value: '48x',
                boolean: false,
            },
            {
                value: '60x',
                boolean: false,
            },
            {
                value: 'Outro Prazo',
                boolean: true,
            },
        ]
    }],
};

export default DataSelectContent;