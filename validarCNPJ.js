<script type="text/javascript">
is_cnpj = function (c) {
    var b = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    if(/0{14}/.test(c))
        return false;
    if((c = c.replace(/[^\d]/g,"")).length != 14)
        return false;
    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false;
	habilita_campo();
    return true;
};
cnpjCheck = function (el) {
    document.getElementById('cnpjResponse').innerHTML = is_cnpj(el.value)? '<span style="color:green">CNPJ válido</span>' : '<span style="color:red">CNPJ incompleto ou inválido. Faça a correção para pode continuar.</span>';
    if(el.value=='') document.getElementById('cnpjResponse').innerHTML = '';
}

</script>