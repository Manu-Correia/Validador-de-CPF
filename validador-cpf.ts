const cpfi=["529.982.247-25", "080.851.649-30", "09019234590", "019203911041314", "000.000.000-00", "028.687.800-32", "014.227-619-75"]
function limpar_cpf(cpf: string): string{
  return cpf.replace(/\D/g, '');
}
function numigual(cpf: string): boolean{
  return cpf.split('').every(char=>char===cpf[0]);
}
function form(cpf: string): string{
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}
cpfi.forEach((cpf) => {
  const limpo = limpar_cpf(cpf);
  if(limpo.length!==11){
    cpf=form(cpf);
    console.log(`ERRO: CPF inválido "${cpf}"`);
  }else if(numigual(limpo)){
    cpf=form(cpf);
    console.log(`ERRO: CPF inválido "${cpf}"`);
  }else{
    let soma=0;
    let res;
    let dig0;
    const cpfnum=limpo.split('').map(Number);
    for(let i=0; i<9; i++){
      soma+=cpfnum[i]*(10-i);
    }
    res=soma%11;
    if(res<2){
      dig0=0;
    }else{
      dig0=11-res;
    }
    let soma2=0;
    let res2;
    let dig2;
    for(let i=0; i<10; i++){
      soma2+=cpfnum[i]*(11-i);
    }
    res2=soma2%11;
    if(res2<2){
      dig2=0;
    }else{
      dig2=11-res2;
    }
    if(dig0===cpfnum[9] && dig2===cpfnum[10]){
      console.log(`CPF válido formatado: ${limpo}`);
    }else{
      cpf=form(cpf);
      console.log(`ERRO: CPF inválido "${cpf}"`);
    }
  }
});
