/**
 * Конфигурация Module Federation
 * В этом файле определяются все модули, которые мы хотим экспортировать или импортировать
 */

module.exports = {
  // Удаленные модули, которые мы подключаем из других приложений
  // В данном примере это пусто, но здесь вы можете добавить другие микрофронтенды
  remotes: {
    // remote1: 'remote1@http://localhost:3001/remoteEntry.js',
    // remote2: 'remote2@http://localhost:3002/remoteEntry.js',
  },
  
  // Модули, которые мы экспортируем для других приложений
  exposes: {
    './Header': './src/modules/header/Header',
    './Footer': './src/modules/footer/Footer',
    './AuthProvider': './src/modules/auth/AuthProvider',
    './DashboardPage': './src/modules/dashboard/pages/DashboardPage',
  },
};