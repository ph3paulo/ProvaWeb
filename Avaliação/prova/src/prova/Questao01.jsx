const Questao01X = () =>{
    // objeto que contem os valors que serão passados via props para o fubção Questão01Y
    const correntistas = [
        { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0} },
        { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800} },
        { nome: "Fulano", aplic: { pp: 5000.00, rf: 0.0, cc:500} }
      ];
    
      return (
        <>
          {
            // Passando  o objeto correntistas para o componente Questao01Y
          }
          <Questao01Y correntistas={correntistas} />
        </>
      );
    };
    

export const Questao01Y = (correntistas) => {
    let vet = []
    // eslint-disable-next-line no-unused-expressions
    correntistas.map((user)=>{vet.push((user.aplic.pp + user.aplic.rf + user.aplic.cc))/3});

    

}

export default Questao01X
