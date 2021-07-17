function App() {
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=cc.smarnet.wippyprint&hl=en_US&gl=US");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.replace("https://apps.apple.com/us/app/wippyprint/id1561908354");
    }
  }

  return (
    <div className="App">
      <p>Redirect</p>
      {getMobileOperatingSystem}
    </div>
  );
}

export default App;
