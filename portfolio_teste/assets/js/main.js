// Dados estáticos
const profileData = {
   job: 'Assistente de Monitoramento Digital',
   location: 'Recife - PE',
   phone: '(81) 9.9257-5011',
   email: 'carloseuclidesneto@gmail.com'
};

// Função para atualizar o perfil com dados estáticos
function updateProfileInfo() {
   // Atualiza o texto dos elementos HTML
   const jobElement = document.querySelector('.job');
   const locationElement = document.querySelector('.location');
   const phoneElement = document.querySelector('.phone a'); // <a> dentro de .phone
   const emailElement = document.querySelector('.email a'); // <a> dentro de .email

   if (jobElement) jobElement.textContent = profileData.job;
   if (locationElement) locationElement.textContent = profileData.location;
   if (phoneElement) phoneElement.textContent = profileData.phone;
   if (emailElement) emailElement.textContent = profileData.email;
}

// Quando a página estiver carregada, atualize o perfil
document.addEventListener('DOMContentLoaded', updateProfileInfo);