import './Login.css';

function Login() {
    return (
        <main>
            <section>
                <img src="/TextlessLogo.png" alt="Nexus Logo" />
            </section>
            <section>
                <form name="loginForm" method="post" action="" >
                    <label htmlFor="loginUsername">Usuário</label>
                    <input type="text" id="loginUsername" required autoFocus />

                    <label htmlFor="loginPassword" required>Senha</label>
                    <input type="password" id="loginPassword" required />

                    <a href="./">Esqueceu a senha?</a>
                    <a href="./">Criar uma conta nova</a>

                    <input type="submit" value="Login" />
                </form> 
            </section>
        </main>
    );
}

export default Login;
