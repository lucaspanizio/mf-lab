# mf-lab — Module Federation Lab

Um laboratório pessoal para demonstrar Module Federation com React, Angular e Vue.

## 🚀 Como iniciar

### Pré-requisitos

- Node.js 16+
- pnpm

### Instalar dependências

```bash
pnpm install
```

### Rodar em desenvolvimento

```bash
pnpm dev
```

Isso iniciará todos os três apps em paralelo:

- **React** (Host): http://localhost:5173
- **Angular** (Remote): http://localhost:4200
- **Vue** (Remote): http://localhost:5174

### Build para produção

```bash
pnpm build
```

## 📁 Estrutura do projeto

```
mf-lab/
├─ apps/
│  ├─ react/        # React + Vite (Host/Shell)
│  ├─ angular/      # Angular + Webpack (Remote - Formulário)
│  └─ vue/          # Vue + Webpack (Remote - Toast)
├─ pnpm-workspace.yaml
├─ package.json
└─ README.md
```

## 🔗 Fluxo da aplicação

1. React renderiza a página principal com Navbar
2. Angular fornece um formulário remoto via Module Federation
3. Ao submeter o formulário, Angular emite evento `form:submit`
4. React escuta o evento e chama função do Vue
5. Vue exibe um Toast de sucesso

## 🛠️ Stack tecnológico

| Framework  | Bundler   | Styling        | Porta |
| ---------- | --------- | -------------- | ----- |
| React 18   | Vite      | TailwindCSS v4 | 5173  |
| Angular 17 | Webpack 5 | CSS Puro       | 4200  |
| Vue 3      | Webpack 5 | SASS           | 5174  |

## 📝 Notas

- Sem backend real
- Sem persistência de dados
- Foco em arquitetura e integração cross-framework
- Comunicação baseada em eventos e contracts neutros
