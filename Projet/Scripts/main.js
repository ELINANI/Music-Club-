$(document).ready(function () {

    function Aleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var nbr = Aleatoire(15555, 122222);

    $('#val').val(nbr);
    $('#val1').val(nbr);

    $('#ligne').val($('prd').val());
});
