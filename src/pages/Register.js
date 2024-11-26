import './Register.css';

function Register() {
    return (
        <main>
            <section>
                <img src="/TextlessLogo.png" alt="Nexus Logo" />
            </section>
            <section>
                <form name="registerForm" action="" method="post">
                    <label htmlFor="newUsername">Usuário*</label>
                    <input type="text" id="newUsername" pattern="[A-Za-z0-9]{3,12}" placeholder="Insira um usuário válido..." title="Deve conter entre 3 e 12 caracteres, apenas letras e números." required autoFocus />

                    <label htmlFor="newTelephone">Telefone*</label>
                    <input type="tel" id="newTelephone" name="telephone" pattern="[0-9]{13,14}" placeholder="Insira o seu telefone com DDD..." title="Número de telefone: (xx)xxxxx-xxxx" required />
                    
                    <label htmlFor="newCpf">CPF*</label>
                    <input type="text" id="newCpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder="Insira o seu CPF..." title="Insira seu CPF: xxx.xxx.xxx-xx" required />
                    
                    <label htmlFor="newEmail">Email*</label>
                    <input type="email" id="newEmail" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="Insira o seu e-mail..." title="Exemplo: exemplo@email.com" required />

                    <label htmlFor="newConfirmEmail">Confirmar email*</label>
                    <input type="email" id="newConfirmEmail" placeholder="Confirme o seu e-mail..." required />

                    <label htmlFor="newPassword" required>Senha*</label>
                    <input type="password" id="newPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Digite uma senha válida..." title="Deve conter pelo menos um número, uma letra minúscula e maiúscula e pelo menos 8 ou mais caracteres." required />

                    <label htmlFor="newConfirmPassword" required>Confirmar senha*</label>
                    <input type="password" id="newConfirmPassword" placeholder="Repita a sua senha..." required />

                    <a href="./">Já possui uma conta? Entrar</a>

                    <input type="submit" value="Registrar" />
                    <input type="button" value="Cancelar" />
                </form>
            </section>
        </main>
    );
}

export default Register;
