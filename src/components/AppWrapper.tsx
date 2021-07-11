import {createGlobalStyle} from "styled-components"

const AppWrapperStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
    --background-color: #3b4d61;
    }

    body {
    font-family: "Nunito", Tahoma, Geneva, Verdana, sans-serif;
    background: var(--background-color);
    }

`

const AppWrapper: React.FC = ({children}) => {
    return (
        <>
            <AppWrapperStyles />
            {children}
        </>
    )
}

export default AppWrapper