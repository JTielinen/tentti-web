window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('koko').addEventListener('change', paivitaSumma);
  document.querySelectorAll('input[name="tayte"]').forEach(function(tayte) {
    tayte.addEventListener('change', paivitaSumma);
  });
});

function paivitaSumma() {
  let koko = document.getElementById('koko').value;
  let taytteet = document.querySelectorAll('input[name="tayte"]:checked');
  let taytteetHinta = 0;

  taytteet.forEach(function(tayte) {
    taytteetHinta += parseInt(tayte.value);
  });

  let summa = (parseInt(koko) || 0) + taytteetHinta;
  document.getElementById('summa').value = summa;
}

function NollaaKaikkiAsetukset() {
  document.getElementById('pizzaForm').reset();
  document.getElementById('summa').value = 0;
}

function naytaInfo() {
  alert('Tämä pizza on erittäin hyvä ja maukas. Tehty tuoreista raaka-aineista. Suositeltu koko on normaali ellei ole isompikin nälkä ;)');
}
