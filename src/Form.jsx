import React, {useState, useEffect} from "react";
import './App.css';

export default function Form(){

    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        senha: '',
    });


    const [isOpen, setIsOpen] = useState(false); //estado para controlar a visibilidade do popup

    //função para abrir o popup
    const openPopup = () => {
      setIsOpen(true);
    };
  
    //função para fechar o popup
    const closePopup = () => {
      setIsOpen(false);
    };

     //função para atualizar o formData quando digitar na desgraça do input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    //estado para controlar se o botão está ativo ou não  
    const [aceito, setAceito] = useState(false);
    //função pra mudar o estado
    const mudarCheckBox = (event) => {
      setAceito(event.target.checked);
    };

    //funções para trocar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return(
        <main className='container'>

        {/*lado da esquerda */}
        <aside className='flex flex-column'>
          <div className='flex flex-column'>
            <div className='logo'>
              <a href="/">
                <img src="./public/logo.svg"/>
              </a>
            </div>
            <div className='titulo'>
              <h1 className='tituloNegrito'>
                              Complete os campos ao lado para abrir sua Conta
                              Digital
                          </h1>
              <p class="subtitulo">
                              Aqui, você acontece com segurança e toda a
                              praticidade que o Digital Bank oferece. Mais do que
                              uma conta com cartão, você tem uma experiência
                              completa com investimentos, Mimos exclusivos e muito
                              mais.
                          </p>
              <small>
                &copy; Criado por Giovanny Lucas Oliveira de Aquino | Matrícula 37022429
              </small>
            </div>
          </div>
        </aside>
  
        {/*lado da direita */}
        <div className='flex flex-column'>
          <div className='flex flex-column'>
  
          <div className="progresso">
                          <label class="">Preencha os campos</label>
                          <progress value="25" max="100"></progress>
                      </div>
  
            <div className="flex flex-column">
                          <label for="nome">Digite seu nome</label>
                          <input 
                          type="text" 
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange} /*usa a função pra atualizar o estado do input */
                          />
                      </div>
  
            <div className="flex flex-column">
                          <label for="telefone">Digite seu telefone</label>
                          <input 
                          type="text" 
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange} /*usa a função pra atualizar o estado do input */
                          />
                      </div>
  
                      <div className="flex flex-column">
                          <label for="email">Digite seu e-mail</label>
                          <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                          onChange={handleChange} /*usa a função pra atualizar o estado do input */
                          />
                      </div>
  
                      <div className="flex flex-column">
                          <label for="senha">Digite seu senha</label>
                          <input
                            type={showPassword ? "text" : "password"}
                           id="senha"
                           name="senha"
                           value={formData.senha}
                           onChange={handleChange} /*usa a função pra atualizar o estado do input */
                           />

                          <button onClick={togglePasswordVisibility} 
                           className="mostra-senha">Exibir senha</button>
                      </div>
  
            <div className="flex termos">
                          <input
                              type="checkbox"
                              checked={aceito}
                              onChange={mudarCheckBox} /*usa a função para mudar a o estado da CheckBox */
                              id="aceita-termos" />
                          <label for="aceita-termos">
                              Eu li, estou ciente das condições de tratamento dos
                              meus dados<br/> pessoais e dou meu consentimento, quando<br/>
                              aplicável, conforme descrito nesta
                          </label>
                      </div>
  
                      <div className="flex">
                          <button 
                          className="botao" 
                          disabled={!aceito}
                          onClick={openPopup}> {/*verifica o estado da checkBox*/}
                              {aceito ? "Abra sua conta" : "Aceite os termos"} {/*muda o texto a depender se a checkbox está ativa ou não*/}
                          </button> {/*a regra de estilização para quando o botão está desativado, está no aqruivo "App.css" */}
                          
                          {isOpen && ( //renderiza o popup se isOpen for verdadeiro
                            <div className="popup">
                                 <div className="popup-content">
                                    <h2 className="dopopup">Obrigado pro criar sua conta no Digital Bank, {formData.nome}!</h2>
                                <button className="botaodopopup" onClick={closePopup}>Fechar</button>
                             </div>
                         </div>
                             )}
                      </div>
  
            <div className='flex'> {/*nessa parte do código eu apanhei igual cachorra por não estar usando uma função para alterar o formData */}
              <p className='paragrafoFinal'>Obrigado {formData.nome}, por abrir sua conta! Você receberá no email: {formData.email}  detalhes sobre o recebimento do cartão.</p>
            </div>
          </div>
        </div>
  
      </main>
    );
};