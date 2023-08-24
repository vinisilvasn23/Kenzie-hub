import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
    --color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
    --color-black: #000000;
	--color-white: #ffffff;

    --font-primary: 'Inter', sans-serif;
	--font-secundary: 'Nunito', sans-serif;

    --font-weight-700: 700;
	--font-weight-600: 600;
	--font-weight-500: 500;
	--font-weight-400: 400;

	--font-size-18: 1.125rem;
	--font-size-14: 0.875rem;
	--font-size-12: .75rem;
    }

	body{
    background-color: var(--color-black);
	}
	.Toastify__toast-theme--light {
    background: var(--color-grey-2);
    color: var(--color-grey-0);
	}
	.Toastify__close-button{
	color: var(--color-grey-0);
	}

.custom-overlay{
	position: fixed;
    width: 100%;
    height: 100vh;
    inset: 0;
	background-color: rgba(18, 18, 20, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
