# 📁 Trabalho_angelo

### Portfólio dos alunos de Design – Repositório Oficial

Este repositório é usado para **organização, criação e versionamento** dos portfólios produzidos pelos alunos.
Para manter tudo organizado e evitar conflitos, siga atentamente as instruções abaixo.

---

# 🚀 Primeira vez acessando o repositório?

## 1️⃣ Copie o link do repositório (HTTPS)

No GitHub → clique em **Code** → copie o link **HTTPS**.

---

## 2️⃣ Abra o terminal no local onde deseja salvar o projeto

```bash
cd caminho/para/sua/pasta
```

---

## 3️⃣ Clone o repositório

```bash
git clone <link-do-repositorio>
```

Depois entre na pasta:

```bash
cd Trabalho_angelo
```

---

# 🔄 Já tenho o repositório clonado. E agora?

Sempre que for trabalhar no projeto, siga esta sequência:

## 1️⃣ Entre na pasta do repositório

```bash
cd caminho/para/o/repositorio
```

---

## 2️⃣ Verifique se existe algo não salvo

```bash
git status
```

Se aparecer algo modificado, finalize antes (commit ou stash).

---

## 3️⃣ Atualize o repositório (sempre pela dev)

Antes de começar a programar:

### Vá para a branch dev:

```bash
git checkout dev
```

### Puxe as atualizações da dev:

```bash
git pull
```

### Volte para sua branch individual:

```bash
git checkout NOME-DA-SUA-BRANCH
```

### Traga as atualizações da dev para sua branch:

```bash
git merge dev
```

🔧 *Se houver conflitos, resolva antes de continuar.*

Agora sim você pode começar a programar!

---

# ✏️ Como funciona o fluxo de envio de alterações

Todos trabalham **apenas na própria branch individual**.
❌ Nunca trabalhe na `dev` ou `main`.

### ✔️ Fluxo para os alunos:

```
Sua branch → Commit → Push → Abrir Pull Request para a dev
```

### ✔️ Fluxo do líder (Lucca):

1. Revisar e aprovar PRs enviados para a **dev**
2. Fazer merge para a **dev**
3. Testar funcionamento na dev
4. Quando estiver ok → fazer merge **dev → main**

---

# 🌿 Em qual branch cada aluno trabalha?

Cada aluno possui sua própria branch, por exemplo:

```
lucca
karlla
michael
rachel
rosane
eduarda
```

📌 **IMPORTANTE:**

* Trabalhe **somente** na sua branch individual
* Sempre sincronize sua branch com a dev antes de programar
* Ao finalizar seu trabalho, abra um Pull Request para a branch **dev**

---

# 📤 Como enviar suas alterações

### 1️⃣ Verificar alterações

```bash
git status
```

### 2️⃣ Adicionar arquivos

```bash
git add .
```

Ou um arquivo específico:

```bash
git add caminho/arquivo.extensao
```

### 3️⃣ Criar commit

```bash
git commit -m "Descrição clara e objetiva das alterações"
```

### 4️⃣ Enviar para sua branch remota

```bash
git push origin NOME-DA-SUA-BRANCH
```

---

# 🔀 Abrindo Pull Request (PR)

No GitHub:

1. Vá em **Pull Requests**
2. Clique em **New Pull Request**
3. Configure assim:

* **base:** `dev`
* **compare:** sua branch individual

4. Enviar PR

O Lucca analisará, aprovará e fará o merge.

---

# ⚠️ Resolvendo conflitos (básico)

Durante o `git merge dev`, pode aparecer conflito:

1. Abra o arquivo marcado com conflito
2. Você verá:

```
<<<<<<< HEAD
(sua versão)
=======
(versão da dev)
>>>>>>> dev
```

3. Edite escolhendo o que manter
4. Depois finalize:

```bash
git add .
git commit -m "Conflito resolvido"
```

---

# 📌 Boas práticas

* Sempre faça `git pull` da **dev** antes de programar
* Nunca trabalhe fora da sua branch
* Commits devem ser claros e objetivos
* Mantenha sua branch atualizada mesclando com a dev
* Não faça PR para main — apenas para dev
* Nunca faça merge por conta própria

# Comandos para fazer o merge para main
 Após fazer o `git push` faça os seguintes comandos

```bash
1° - git pull origin main
2° - git checkout main
3° - git merge sua_branch
4° - git push -u origin main
```