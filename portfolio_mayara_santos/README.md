# Portfólio Web - Mayara Santos

## Descrição do Projeto

Website profissional desenvolvido para Mayara Santos, estudante de Design de Interiores, transformando seu portfólio PDF em um site web dinâmico e interativo.

### Objetivo
Criar uma presença online profissional que transmita:
- Profissionalismo e elegância
- Acolhimento e autenticidade  
- Autenticidade sobre o trabalho de Mayara

## Funcionalidades Implementadas

### ✅ Estrutura HTML5 Semântica
- Header com navegação principal
- Sections bem definidas (hero, sobre, projetos, contato)
- Footer com informações de contato
- Tags semânticas apropriadas (header, nav, main, section, article, footer)

### ✅ CSS3 com Layout Responsivo Mobile-First
- Design adaptável para smartphones, tablets e desktops
- Media queries para diferentes tamanhos de tela
- Grid e Flexbox para layouts modernos
- Tipografia responsiva com clamp()

### ✅ Páginas e Seções
1. **Home/Hero** - Apresentação impactante
2. **Sobre** - Informações detalhadas sobre Mayara
3. **Projetos** - Galeria de projetos com 4 exemplos
4. **Contato** - Formulário de contato e informações

### ✅ Interatividade CSS
- Hover effects em links e botões
- Transições suaves em todos os elementos interativos
- Animações de cards e elementos ao passar o mouse
- Efeitos de escala e transformação

### ✅ JavaScript Avançado
- Menu mobile com hambúrguer animado
- Scroll suave entre seções
- Botão "Voltar ao Topo" funcional
- Validação de formulário de contato
- Animações ao fazer scroll (Intersection Observer)
- Indicador de seção ativa na navegação

## Estrutura de Arquivos

```
portfolio-mayara-santos/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principais
├── js/
│   └── main.js        # Funcionalidades JavaScript
├── img/            # Pasta para imagens (reservada)
├── README.md          # Este arquivo
└── instruções portfólio.txt  # Instruções do projeto
```

## Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e funcionalidades
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter + Playfair Display)

### Princípios de Design
- **Mobile-First** - Prioridade para dispositivos móveis
- **Progressive Enhancement** - Melhoria progressiva
- **Acessibilidade** - Estrutura semântica e navegação clara
- **Performance** - CSS e JS otimizados

## Paleta de Cores

```css
:root {
    --primary-color: #8B4513;      /* Marrom escuro */
    --secondary-color: #D2691E;       /* Laranja marrom */
    --accent-color: #F4A460;        /* Pêssego claro */
    --text-dark: #2C1810;            /* Marrom muito escuro */
    --text-light: #6B4423;            /* Marrom médio */
    --bg-light: #FAF6F2;              /* Bege claro */
    --bg-white: #FFFFFF;             /* Branco */
}
```

## Funcionalidades por Seção

### Header/Navegação
- Menu fixo com sombra ao fazer scroll
- Navegação mobile com menu hambúrguer
- Links com indicação visual de hover
- Indicador de seção ativa

### Hero Section
- Título principal com tipografia elegante
- Breve descrição profissional
- Botão CTA para projetos
- Espaço reservado para foto de perfil

### Sobre
- Texto biográfico detalhado
- Hard skills (comunicação, empatia, criatividade)
- Soft skills (arte, cinema, música)
- Softwares (SketchUp, AutoCAD, Promob, Revit)
- Espaço para segunda foto de perfil

### Projetos
- Grid responsivo de cards
- 4 projetos de exemplo:
  - Living Moderno (residencial)
  - Café Aconchegante (comercial)
  - Suíte Master (quarto)
  - Cozinha Gourmet (cozinha)
- Hover effects nos cards
- Botões "Ver Detalhes" (prontos para expansão)

### Contato
- Informações de contato com ícones
- Formulário funcional com validação
- Layout em duas colunas (desktop) / uma coluna (mobile)

### Footer
- Links sociais (Instagram, LinkedIn, Behance)
- Direitos autorais
- Design limpo e profissional

## Espaços Reservados para Imagens

O site possui espaços preparados para:
1. **Hero Section** - Foto de perfil principal (circular)
2. **Sobre Section** - Segunda foto de perfil (retangular)
3. **Projeto Cards** - Imagens de cada projeto
4. **Background** - Imagens adicionais se necessário

## Funcionalidades JavaScript Detalhadas

### Menu Mobile
```javascript
// Toggle do menu com animação do hambúrguer
// Fechamento ao clicar em links ou fora do menu
```

### Scroll Suave
```javascript
// Navegação suave entre seções
// Compensação da altura do header fixo
```

### Botão Voltar ao Topo
```javascript
// Aparece após 300px de scroll
// Animação suave de volta ao topo
```

### Validação de Formulário
```javascript
// Validação de campos obrigatórios
// Validação de formato de email
// Feedback visual ao usuário
```

### Animações ao Scroll
```javascript
// Intersection Observer para animações
// Fade in dos elementos conforme aparecem na tela
```

## Responsividade

### Mobile (< 480px)
- Menu hambúrguer ativado
- Layout em coluna única
- Tipografia reduzida
- Touch-friendly

### Tablet (481px - 768px)
- Menu horizontal possível
- Grid 2 colunas para projetos
- Ajustes de espaçamento

### Desktop (> 768px)
- Menu horizontal completo
- Grid 2-4 colunas conform necessário
- Layouts complexos com sidebar

## Melhorias Futuras Recomendadas

### Fase 1 - Imagens e Conteúdo
- [ ] Adicionar fotos de perfil da Mayara
- [ ] Substituir placeholders por imagens reais dos projetos
- [ ] Adicionar conteúdo real dos projetos
- [ ] Incluir certificados e prêmios

### Fase 2 - Funcionalidades Adicionais
- [ ] Implementar lightbox para imagens
- [ ] Adicionar carrossel de depoimentos
- [ ] Criar sistema de filtros para projetos
- [ ] Adicionar animação de carregamento

### Fase 3 - Otimização
- [ ] Otimizar imagens para web
- [ ] Implementar lazy loading completo
- [ ] Adicionar meta tags SEO
- [ ] Implementar PWA capabilities

### Fase 4 - Integrações
- [ ] Integrar com formulário real (emailJS ou similar)
- [ ] Adicionar Google Analytics
- [ ] Integrar redes sociais
- [ ] Adicionar chatbot simples

## Como Personalizar

### Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-color: #SUA_COR_PRIMARIA;
    --secondary-color: #SUA_COR_SECUNDARIA;
    // ... outras cores
}
```

### Conteúdo
Edite diretamente o arquivo `index.html` para:
- Textos e descrições
- Informações de contato
- Links sociais
- Nomes dos projetos

### Imagens
Substitua os placeholders adicionando:
```html
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
```

## Notas de Desenvolvimento

### Acessibilidade
- Estrutura HTML semântica implementada
- Navegação por teclado funcionando
- Textos alternativos preparados para imagens
- Contraste de cores adequado

### Performance
- CSS e JavaScript otimizados
- Animações com GPU acceleration
- Imagens lazy load ready
- Código modular e organizado

### SEO Básico
- Estrutura semântica HTML5
- Títulos hierárquicos (h1, h2, h3)
- Meta viewport para mobile
- Conteúdo textual relevante

## Suporte

Este projeto foi desenvolvido seguindo as melhores práticas de:
- HTML5 semântico
- CSS3 moderno e responsivo
- JavaScript vanilla (sem frameworks)
- Design mobile-first
- Acessibilidade web

## Autor

Desenvolvido como parte do projeto final da disciplina de Intrudução à Front-end

---

**Data de Criação:** Novembro 2025  
**Versão:** 1.0  
**Status:** Completo e funcional