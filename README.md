# Academia Força Máxima - São Bento do Sapucaí

Este é o protótipo interativo de alta fidelidade do aplicativo para a **Academia Força Máxima**, localizada em São Bento do Sapucaí - SP.

O projeto foi construído como uma Single Page Application (SPA) responsiva com design premium escuro e detalhes em vermelho, simulando a navegação e a experiência de um aplicativo mobile real.

---

## 🚀 Funcionalidades Principais

### 1. Área do Aluno (Dashboard, Fichas e Pagamentos)
- **Perfil do Aluno**: Acompanhamento de metas físicas (peso, objetivo, frequência) e progresso da ficha atual.
- **Ficha de Treino**: Organização dos treinos em abas (Treino A, B, C) com checkmarks interativos, e caixas de entrada para registro de carga e repetições executadas em tempo real.
- **Modo Autônomo**: Liberdade para o aluno adicionar/remover exercícios do catálogo diretamente em sua ficha.
- **Guia de Execução**: Animações em vetores SVG integradas exibindo a postura e execução corretas de cada exercício de forma dinâmica.
- **Financeiro**: Seleção de planos (Mensal, Semestral, Anual) e simulação de pagamento via PIX (Copia e Cola com QR Code) ou cadastro de cartão.

### 2. Área do Professor (Acompanhamento e Edição de Fichas)
- **Gestão de Alunos**: Relação de todos os alunos cadastrados com busca por nome/objetivo.
- **Editor de Treinos**: Interface completa para montar ou atualizar os exercícios do aluno, definir séries, repetições e peso recomendado.
- **Alerta de Ficha Vencida**: Indicador visual automático (`Vencida (+90d)`) identificando alunos que estão há mais de 3 meses com a mesma grade de treinos.

### 3. Área de Administração (ADM)
- **Painel Financeiro**: Monitoramento do faturamento estimado com base nos planos ativos, estatísticas de alunos ativos e pendentes.
- **Controle de Mensalidades**: Tabela de recebimento permitindo confirmar pagamentos pendentes de forma manual.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura semântica das seções e abas.
- **CSS3 (Vanilla)**: Variáveis de estilo, grid/flexbox responsivos, glassmorfismo e animações fluidas de transição de tela.
- **JavaScript (ES6+)**: Controle de estados, banco de dados local com `localStorage` e rotas SPA.
- **Vetores SVG**: Logotipo vetorizado institucional e animações procedimentais dos movimentos dos exercícios.

---

## 💻 Como Executar
1. Clone este repositório.
2. Abra o arquivo `index.html` diretamente em seu navegador web (Google Chrome, Firefox, Safari ou Microsoft Edge).
3. Use o seletor no topo da página (**Modo de Teste**) para alternar entre as visões de **Aluno**, **Professor** e **ADM**.
