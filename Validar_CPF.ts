function limpar_cpf(cpf: string): string{
  return cpf.replace(/\D/g, '');
}
let limpo=limpar_cpf;