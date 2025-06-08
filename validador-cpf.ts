const cpfi=["529.982.247-25", "080.851.649-30", "09019234590", "019203911041314", "000.000.000-00"]
function limpar_cpf(cpf: string): string{
  return cpf.replace(/\D/g, '');
}
function numigual(cpf: string): boolean{
  return cpf.split('').every(char=>char===cpf[0]);
}
cpfi.forEach((cpf) => {
  const limpo = limpar_cpf(cpf);
  if(limpo.length!==11){
    console.log(`ERRO: CPF inválido "${cpf}"`);
  }else if(numigual(limpo)){
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
    console.log(`CPF válido formatado: ${limpo}`);
  }
});
