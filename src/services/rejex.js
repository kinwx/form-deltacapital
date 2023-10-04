const formatter = (type, value) => {
    const notFormat = value;

    switch(type) {
        case 'cpf':
            const formatCpf = notFormat.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');

            return formatCpf;
            break;
        case 'cnpj':
            const formatCnpj = notFormat.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');

            return formatCnpj;
            break;
        case 'phone':
            const formatPhone = notFormat.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');

            return formatPhone;
            break;
        case 'cep':
            const formatCep = notFormat.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');

            return formatCep;
            break;
        case 'date':
            const formatDate = notFormat.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d+?$)/, '$1');

            return formatDate;
            break;
        case 'price':
            const formatPrice = notFormat.replace(/\D/g,"")
            .replace(/(\d{1})(\d{14})$/,"$1.$2") 
            .replace(/(\d{1})(\d{11})$/,"$1.$2") 
            .replace(/(\d{1})(\d{8})$/,"$1.$2")
            .replace(/(\d{1})(\d{5})$/,"$1.$2")
            .replace(/(\d{1})(\d{1,2})$/,"$1,$2");

            return formatPrice;
            break;
    };
};

export default formatter;