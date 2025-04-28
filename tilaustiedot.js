document.addEventListener('DOMContentLoaded', function() {
  const koko = document.getElementById('koko');
  const taytteet = document.querySelectorAll('input[name="tayte"]');

  if (koko) {
    koko.addEventListener('change', paivitaSumma);
  }

  taytteet.forEach(function(tayte) {
    tayte.addEventListener('change', paivitaSumma);
  });
});

function paivitaSumma() {
  const koko = document.getElementById('koko');
  const taytteet = document.querySelectorAll('input[name="tayte"]:checked');

  let kokoHinta = parseInt(koko.value) || 0;
  let taytteetHinta = 0;

  taytteet.forEach(function(tayte) {
    taytteetHinta += parseInt(tayte.value);
  });

  const yhteensa = kokoHinta + taytteetHinta;
  document.getElementById('summa').value = yhteensa;
}

function Tilaa() {
  document.getElementById('pizzaForm').reset();
  document.getElementById('summa').value = 0;
}

function naytaInfo() {
  alert('Tämä pizza on erittäin hyvä ja maukas. Tehty tuoreista raaka-aineista. Suositeltu koko on normaali ellei ole isompikin nälkä ;)');
}
