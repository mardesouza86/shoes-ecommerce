import React from "react";


function Texto() {
  return <Valores name="MDQ" days={56} occupation="developers software de RedNet" />;
}

function Valores(props) {
  return (
    <p className="textoinicial">
      Bienvenidos a la pagina de {props.name}, en solo {props.days} dias esta pagina va a estar activa, gracias al equipo de {props.occupation}.
      Vuelve en 56 dias para disfrutar de nuestro catalogo!
    </p>
  );
}

export default Texto;