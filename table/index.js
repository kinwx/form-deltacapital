const table = `
<h1>Delta Capital - Formulário</h1>
<p>
<strong>FORMULÁRIO ID:</strong> <span>${object.form_id}</span>
</p>

<p>Segue abaixo os dados do formulário.</p>

<table style="border-collapse: collapse;" border=1>
<colgroup>
  <col style="width: 50%;"><col style="width: 50%;">
</colgroup>

<tbody>
<tr>
<th colspan=2>
DELTA CAPITAL
</th>
</tr>

<tr>
<td colspan=2>&nbsp;</td>
</tr>
<tr>
<th colspan=2>
DADOS INICIAIS
</th>
</tr>

<tr>
<th align="start" style="padding: .5em;">QUEM EST&Aacute; ENVIANDO O CADASTRO</th>
<td>${object.user}</td>
</tr>
<tr>
${ object.user !== 'Cliente' ? `
    <th align="start" style="padding: .5em;">NOME DA LOJA</th>
    <td>${object.name_store}</td>
    </tr>
    <tr>
    <th align="start" style="padding: .5em;">TELEFONE DA LOJA</th>
    <td>${object.phone_store}</td>
    </tr>
` : ""}
<tr>
<th align="start" style="padding: .5em;">OPERADOR</th>
<td>${object.name_operator}</td>
</tr>

<tr>
<td colspan=2>&nbsp;</td>
</tr>
<tr>
<th colspan=2>DADOS DO PROPONENTE</th>
</tr>

<tr>
<th align="start" style="padding: .5em;">HABILITADO</th>
<td>${object.able}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">CPF</th>
<td>${object.cpf}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">NOME</th>
<td>${object.name}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">DATA DE NASCIMENTO</th>
<td>${object.date}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">RG</th>
<td>${object.rg}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">AFILIAÇÃO - Nome da Mãe </th>
<td>${object.affiliation}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">CEP</th>
<td>${object.cep}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">RUA</th>
<td>${object.logradouro}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">N°</th>
<td>${object.number}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">BAIRRO</th>
<td>${object.bairro}</td>
</tr>
${ object.complemento ? `
<tr>
<th align="start" style="padding: .5em;">COMPLEMENTO</th>
<td>${object.complemento}</td>
</tr>
` : ""}
<tr>
<th align="start" style="padding: .5em;">CIDADE</th>
<td>${object.localidade}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">CELULAR CLIENTE</th>
<td>${object.phone}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">EMAIL CLIENTE</th>
<td>${object.email}</td>
</tr>

<tr>
<td colspan=2>&nbsp;</td>
</tr>
<tr>
<th colspan=2>ATIVIDADE PROFISSIONAL</th>
</tr>


<tr>
<th align="start" style="padding: .5em;">ATIVIDADE PROFISSIONAL</th>
<td>${object.professional}</td>
</tr>
<tr>
<td colspan=2>&nbsp;</td>
</tr>

${ object.professional == 'Empresário(a)' ? `
    <tr>
    <th align="start" style="padding: .5em;">CNPJ DA EMPRESA</th>
    <td>${object.cnpj_company_manager}</td>
    </tr>
    <tr>
    <th align="start" style="padding: .5em;">RENDA</th>
    <td>R$ ${object.income}</td>
    </tr>
    <tr>
    <td colspan=2>&nbsp;</td>
    </tr>
` : ""}

${ (object.professional == 'Assalariado' || object.professional == 'Funcionário(a) Público') ? `
    <tr>
    <th align="start" style="padding: .5em;">NOME DA EMPRESA</th>
    <td>${object.name_company}</td>
    </tr>
    <tr>
    <th align="start" style="padding: .5em;">ENDEREÇO DA EMPRESA</th>
    <td>${object.adress_company}</td>
    </tr>
    <tr>
    <th align="start" style="padding: .5em;">TELEFONE DA EMPRESA</th>
    <td>${object.contact_company}</td>
    </tr>
    <tr>
    <td colspan=2>&nbsp;</td>
    </tr>
` : ""}

${ object.professional == 'Autônomo' ? `
    <tr>
    <th align="start" style="padding: .5em;">TRABALHA COM O QUE?</th>
    <td>${object.independent_job}</td>
    </tr>
    <tr>
    <td colspan=2>&nbsp;</td>
    </tr>
` : ""}

${ object.professional == 'Profissional Liberal' ? `
    <th align="start" style="padding: .5em;">PROFISSIONAL LIBERAL</th>
    <td>${object.profession}</td>
    </tr>
    <tr>
    ${ object.profession == 'Outros Profissionais Liberais' ? `
    <th align="start" style="padding: .5em;">OUTRA AREA PROFISSIONAL</th>
    <td>${object.outher_area}</td>
    </tr>
    <tr>
    <th align="start" style="padding: .5em;">IDENTIFICAÇÃO PROFISSIONAL ESPECÍFICA</th>
    <td>${object.id_professional}</td>
    </tr>
    ` : ""}
    <tr>
    <td colspan=2>&nbsp;</td>
    </tr>
` : ""}

<tr>
<th colspan=2>DADOS DO VEÍCULO</th>
</tr>

<tr>
<th align="start" style="padding: .5em;">DADOS DO VEÍCULO</th>
<td>${object.vehicle}</td>
</tr>

${ object.vehicle == 'Veículo Usado' ? `
    <tr>
    <th align="start" style="padding: .5em;">PLACA</th>
    <td>${object.license_plate}</td>
    </tr>
` : ""}   
<tr>
<td colspan=2>&nbsp;</td>
</tr>

<tr>
<th align="start" style="padding: .5em;">ANO DE FABRICAÇÃO</th>
<td>${object.year_manufacture}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">ANO DO MODELO</th>
<td>${object.year_model}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">MARCA DO VEÍCULO</th>
<td>${object.vehicle_brand}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">MODELO DO VEÍCULO</th>
<td>${object.model_vehicle}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">VERSÃO DO VEÍCULO</th>
<td>${object.version_vehicle}</td>
</tr>

<tr>
<td colspan=2>&nbsp;</td>
</tr>

<tr>
<th align="start" style="padding: .5em;">MOTOR</th>
<td>${object.motor}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">COMBUSTÍVEL</th>
<td>${object.fuel}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">CÂMBIO DO VEÍCULO</th>
<td>${object.exchange}</td>
</tr>

<tr>
<td colspan=2>&nbsp;</td>
</tr>

<tr>
<th align="start" style="padding: .5em;">VALOR DO VEÍCULO</th>
<td>R$ ${object.vehicle_value}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">VALOR DE ENTRADA</th>
<td>R$ ${object.input_value}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">VALOR DO FINANCIAMENTO</th>
<td>R$ ${object.amount_financed}</td>
</tr>
<tr>
<th align="start" style="padding: .5em;">PRAZO PRETENDIDO</th>
<td>${object.deadline}</td>
</tr>
<tr>
<td colspan=2>&nbsp;</td>
</tr>

${ object.message_client ? `
<tr>
<th colspan=2>MENSAGEM DO CLIENTE</th>
</tr>
<tr>
<td colspan=2 align=center >${object.message_client}</td>
</tr>
` : ""}

</tbody>
</table>
`