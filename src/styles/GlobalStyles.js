import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-size: 62.5%;
    font-family: 'Nunito', sans-serif;
}
a{
    text-decoration: underline;
    font-size: 1rem;
    color: ${Colors.textColor};
    font-family: 'Nunito', sans-serif;
    cursor: pointer;

    &:hover{
        text-decoration: none;
    }
}
p{
    font-size: 1rem;
    color: ${Colors.textColor};
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
}

h1{
    font-size: 2.5rem;
    font-weight: 400;
    color: ${Colors.headings};
    font-family: 'Nunito', sans-serif;
}

h2{
    font-size: 2.2rem;
    font-weight: 400;
    color: ${Colors.headings};
    font-family: 'Nunito', sans-serif;
}
h3{
    font-size: 2rem;
    font-weight: 350;
    color: ${Colors.headings};
    font-family: 'Nunito', sans-serif;
}

h4{
    font-size: 1.5rem;
    font-weight: 350;
    color: ${Colors.footerColor};
    font-family: 'Nunito', sans-serif;
}

h5{
    font-size: 1rem;
    font-weight: 350;
    color: ${Colors.footerColor};
    font-family: 'Nunito', sans-serif;
}

button{
    font-family: 'Nunito', sans-serif;
}
@media (max-width: 1000px){
    p{
        font-size: 1rem;
    }
    a{
        font-size: 1rem;
    }
    h1{
        font-size: 2rem;
    }
    h2{
       font-size: 1.8rem;
    }
    h3{
        font-size: 1.5rem;
    }
    h4{
        font-size: 1.2rem;
    }
    h5{
        font-size: 0.9rem;
    }
}
`;

export default GlobalStyles;
