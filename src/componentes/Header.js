// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';

//Sin destructuring solo props
// function Header(props) {
//     console.log(props)

//     return(
//         <Fragment>
//         <h1>{props.titulo}</h1>
//         </Fragment>
//     )
// }

//Con destructuring a props y usando function declaration
// function Header({titulo}) {
//     return(
//         <Fragment>
//         <h1>{titulo}</h1>
//         </Fragment>
//     )
// }

//Con destructuring a props y usando function expression (return implicito) y sin Fragment
//Si das por implicito el return no podras poner codigo javascript dentro del const, asi que usarlo cuando sea util y no necesitemos
//poner codigo javascript dentro del componente.
const Header = ({titulo}) => ( 
        <h1>{titulo}</h1>
);

export default Header;