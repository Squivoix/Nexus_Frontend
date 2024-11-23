import './Login.css';

function Login() {
    return (
        <main>
            <section>
                <img src="/TextlessLogo.png" alt="Nexus Logo" />
            </section>
            <section>
                <form>
                    <label>Usuário</label>
                    <input type="text" />
                    <label>Senha</label>
                    <input type="password" />
                    <input type="submit" value="Login" />
                    <input type="button" value="Registrar" />
                </form> 
            </section>
        </main>
    );
}

export default Login;
