# Configuração do EmailJS para Formulário de Contacto

## Passos para configurar o EmailJS:

### 1. Criar conta no EmailJS
- Acesse https://www.emailjs.com/
- Crie uma conta gratuita
- Confirme o email

### 2. Criar um Service
- No dashboard do EmailJS, vá para "Email Services"
- Clique em "Add New Service"
- Escolha seu provedor de email (Gmail, Outlook, etc.)
- Configure as credenciais
- Anote o Service ID (ex: service_safeq)

### 3. Criar um Template
- Vá para "Email Templates"
- Clique em "Create New Template"
- **IMPORTANTE:** Na seção "Settings" do template:
  - **To Email:** `{{to_email}}` (isso permite definir o destinatário dinamicamente)
  - **From Name:** `{{from_name}}`
  - **Reply To:** `{{from_email}}`
- **Subject:** `{{subject}}`
- **Content:** Mude para HTML e use este template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem de Contacto</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">SafeQ - Nova Mensagem de Contacto</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Recebida através do website</p>
    </div>
    
    <!-- Content -->
    <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
        
        <!-- Contact Info -->
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e3a8a; margin-top: 0; margin-bottom: 20px; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                👤 Informações do Contacto
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 30%;">Nome:</td>
                    <td style="padding: 8px 0; color: #2d3748;">{{from_name}}</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
                    <td style="padding: 8px 0; color: #2d3748;">
                        <a href="mailto:{{from_email}}" style="color: #3b82f6; text-decoration: none;">{{from_email}}</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Empresa:</td>
                    <td style="padding: 8px 0; color: #2d3748;">{{empresa}}</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Telefone:</td>
                    <td style="padding: 8px 0; color: #2d3748;">{{telefone}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Serviço:</td>
                    <td style="padding: 8px 0; color: #2d3748;">
                        <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                            {{servico}}
                        </span>
                    </td>
                </tr>
            </table>
        </div>
        
        <!-- Message -->
        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e3a8a; margin-top: 0; margin-bottom: 20px; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                💬 Mensagem
            </h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; white-space: pre-wrap; color: #2d3748; line-height: 1.6;">{{message}}</p>
            </div>
        </div>
        
        <!-- Actions -->
        <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:{{from_email}}" style="background: #1e3a8a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; margin-right: 10px;">
                📧 Responder Email
            </a>
            <a href="tel:{{telefone}}" style="background: #059669; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                📞 Ligar
            </a>
        </div>
        
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 14px;">
        <p style="margin: 0;">
            <strong>SafeQ - Consultoria em SAP</strong><br>
            Este email foi enviado através do formulário de contacto do website<br>
            <a href="https://safeq.ao" style="color: #3b82f6; text-decoration: none;">www.safeq.ao</a>
        </p>
        <p style="margin: 10px 0 0 0; font-size: 12px; color: #9ca3af;">
            Data: {{reply_to}} | IP: Automaticamente registado
        </p>
    </div>
    
</body>
</html>
```

- Anote o Template ID (ex: template_contacto)

### 4. Obter a Public Key
- Vá para "Account" → "General"
- Copie a "Public Key"

### 5. Configurar as variáveis de ambiente
- Edite o arquivo `.env.local`
- Substitua os valores:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key`

### 6. Reiniciar o servidor
```bash
npm run dev
```

## Como funciona:
1. O utilizador preenche o formulário
2. Ao submeter, é mostrado um spinner de carregamento no botão
3. Os dados são enviados via EmailJS para geral@safeq.ao
4. Após o envio bem-sucedido, aparece um modal moderno confirmando o envio
5. Você recebe a mensagem diretamente no seu email com formato HTML bonito

## ⚠️ Troubleshooting

### Problema: Email vai para endereço errado
Se o email está sendo enviado para `domingosdaniel.ca@safeq-ao.ao` em vez de `geral@safeq.ao`:

1. **Verificar configuração do Template:**
   - Vá para "Email Templates" no EmailJS
   - Edite seu template
   - Na aba "Settings":
     - **To Email:** deve estar `{{to_email}}`
     - **From Name:** deve estar `{{from_name}}`
     - **Reply To:** deve estar `{{from_email}}`

2. **Se ainda não funcionar:**
   - Delete o template atual
   - Crie um novo template
   - Certifique-se de usar `{{to_email}}` no campo "To Email"

3. **Verificar Service:**
   - O email do service é usado apenas para autenticação
   - O destinatário real deve vir da variável `{{to_email}}`

### Teste rápido:
1. Envie um email de teste pelo formulário
2. Verifique se chegou em `geral@safeq.ao`
3. Se não chegou, verifique o template novamente

## Limites da conta gratuita:
- 200 emails por mês
- Sem necessidade de configuração de servidor
- Sem custos adicionais
