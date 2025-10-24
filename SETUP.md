# 🚀 Guia de Instalação Rápida - Conecta Brasil

## 📋 Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** versão 9 ou superior
- **Git** (opcional, para controle de versão)

## 🛠️ Instalação

### 1. Instalar Dependências

```bash
npm install
```

Isso instalará todas as dependências necessárias:
- Next.js 15
- React 18
- Tailwind CSS 3
- TypeScript 5
- PostCSS e Autoprefixer

### 2. Rodar o Projeto em Desenvolvimento

```bash
npm run dev
```

Abra o navegador em: **http://localhost:3000**

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
conecta-servicos-main/
├── app/
│   ├── dashboard/
│   │   └── page.tsx           # Página do dashboard
│   ├── layout.tsx              # Layout raiz (fontes, metadata)
│   └── page.tsx                # Página principal
├── styles/
│   └── globals.css             # Estilos globais + variáveis CSS
├── public/                     # Arquivos estáticos (criar se necessário)
├── .gitignore                  # Arquivos ignorados pelo Git
├── manifest.json               # PWA manifest
├── next.config.js              # Configuração do Next.js
├── package.json                # Dependências e scripts
├── postcss.config.js           # Configuração do PostCSS
├── service-worker.js           # Service Worker para PWA
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Documentação principal
```

## 🎨 Design System

### Cores

```css
Verde-Petróleo: #1C7C64
Azul-Profundo: #1B3D4B
Dourado-Claro: #E8C96A
Branco Institucional: #F9FAFB
Cinza Suave: #6B6B6B
```

### Fontes

- **Montserrat** → Títulos (h1, h2, h3, etc.)
- **Lato** → Corpo de texto e parágrafos

## 🎯 Páginas Disponíveis

- **/** → Landing page institucional (navbar, hero, serviços, footer)
- **/dashboard** → Dashboard do cliente (em desenvolvimento)

## ⚙️ Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (hot reload)
npm run build    # Build de produção
npm start        # Iniciar servidor de produção
npm run lint     # Verificar erros de lint
```

## 🌐 PWA (Progressive Web App)

O projeto já está configurado como PWA:
- ✅ Manifest.json configurado
- ✅ Service Worker implementado
- ✅ Página offline personalizada
- ⚠️ Adicione ícones em `/public/icon-192x192.png` e `/public/icon-512x512.png`

## 🎨 Customização

### Alterar Cores

Edite o arquivo `tailwind.config.js`:

```js
colors: {
  'verde-petroleo': '#1C7C64',
  'azul-profundo': '#1B3D4B',
  // ... suas cores
}
```

### Adicionar Novos Componentes

1. Crie um arquivo em `app/componentes/SeuComponente.tsx`
2. Use as classes do Tailwind conforme o design system
3. Importe e use no seu arquivo de página

### Modificar Conteúdo

- **Hero**: Edite `app/page.tsx` → Seção "Hero Section"
- **Serviços**: Edite o array de serviços em `app/page.tsx` (linha ~215)
- **Footer**: Edite `app/page.tsx` → Footer Institucional

## 🐛 Solução de Problemas

### Erro "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript

```bash
npx tsc --noEmit
```

### Tailwind não está funcionando

Certifique-se de que `globals.css` está sendo importado no `layout.tsx`

## 📞 Suporte

Caso tenha dúvidas, verifique:
- **README.md** → Documentação completa
- **Next.js Docs** → https://nextjs.org/docs
- **Tailwind CSS Docs** → https://tailwindcss.com/docs

---

**Desenvolvido com ❤️ para o Ecossistema Conecta Brasil®**

