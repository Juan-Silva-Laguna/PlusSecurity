let facil = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let media = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}'];
let dificil = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ' ', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '­', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'Ċ', 'ċ', 'Č', 'č', 'Ď', 'ď', 'Đ', 'đ', 'Ē', 'ē', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ğ', 'ğ', 'Ġ', 'ġ', 'Ģ', 'ģ', 'Ħ', 'ħ', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Į', 'į', 'İ', 'ı', 'Ķ', 'ķ', 'Ĺ', 'ĺ', 'Ļ', 'ļ', 'Ľ', 'ľ', 'Ł', 'ł', 'Ń', 'ń', 'Ņ', 'ņ', 'Ň', 'ň', 'Ŋ', 'ŋ', 'Ō', 'ō', 'Ő', 'ő', 'Œ', 'œ', 'Ŕ', 'ŕ', 'Ŗ', 'ŗ', 'Ř', 'ř', 'Ś', 'ś', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ', 'Ť', 'ť', 'Ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų', 'Ÿ', 'Ź', 'ź', 'Ż', 'ż', 'Ž', 'ž', 'Ɓ', 'Ɔ', 'Ɖ', 'Ɗ', 'Ǝ', 'Ə', 'Ɛ', 'Ƒ', 'ƒ', 'Ɣ', 'Ƙ', 'ƙ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ʋ', 'Ƴ', 'ƴ', 'Ʒ', 'ǝ', 'Ș', 'ș', 'Ț', 'ț', 'ɓ', 'ɔ', 'ɖ', 'ɗ', 'ə', 'ɛ', 'ɣ', 'ʃ', 'ʋ', 'ʒ', 'ʻ', 'ʼ', 'ˆ', 'ˇ', 'ˉ', '˘', '˙', '˛', '˜', '˝̵̧̨̛̣̦̀́̂̃̄̆̇̈̉̊̋̌ͅ',' ', 'Ͱ', 'ͱ', 'Ͳ', 'ͳ', 'ʹ', '͵', 'Ͷ', 'ͷ', 'ͺ', 'ͻ', 'ͼ', 'ͽ', ';', 'Ϳ', '΄', '΅', 'Ά', '·', 'Έ', 'Ή', 'Ί', 'Ό', 'Ύ', 'Ώ', 'ΐ', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'Ϊ', 'Ϋ', 'ά', 'έ', 'ή', 'ί', 'ΰ', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'ς', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'ϊ', 'ϋ', 'ό', 'ύ', 'ώ', 'Ϗ', 'ϐ', 'ϑ', 'ϒ', 'ϓ', 'ϔ', 'ϕ', 'ϖ', 'ϗ', 'Ϙ', 'ϙ', 'Ϛ', 'ϛ', 'Ϝ', 'ϝ', 'Ϟ', 'ϟ', 'Ϡ', 'ϡ', 'Ϣ', 'ϣ', 'Ϥ', 'ϥ', 'Ϧ', 'ϧ', 'Ϩ', 'ϩ', 'Ϫ', 'ϫ', 'Ϭ', 'ϭ', 'Ϯ', 'ϯ', 'ϰ', 'ϱ', 'ϲ', 'ϳ', 'ϴ', 'ϵ', '϶', 'Ϸ', 'ϸ', 'Ϲ', 'Ϻ', 'ϻ', 'ϼ', 'Ͻ', 'Ͼ', 'Ͽ', 'Ѐ', 'Ё', 'Ђ', 'Ѓ', 'Є', 'Ѕ', 'І', 'Ї', 'Ј', 'Љ', 'Њ', 'Ћ', 'Ќ', 'Ѝ', 'Ў', 'Џ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'ѐ', 'ё', 'ђ', 'ѓ', 'є', 'ѕ', 'і', 'ї', 'ј', 'љ', 'њ', 'ћ', 'ќ', 'ѝ', 'ў', 'џ', 'Ѡ', 'ѡ', 'Ѣ', 'ѣ', 'Ѥ', 'ѥ', 'Ѧ', 'ѧ', 'Ѩ', 'ѩ', 'Ѫ', 'ѫ', 'Ѭ', 'ѭ', 'Ѯ', 'ѯ', 'Ѱ', 'ѱ', 'Ѳ', 'ѳ', 'Ѵ', 'ѵ', 'Ѷ', 'ѷ', 'Ѹ', 'ѹ', 'Ѻ', 'ѻ', 'Ѽ', 'ѽ', 'Ѿ', 'ѿ', 'Ҁ', 'ҁ', '҂҃҄҅҆҇҈҉', 'Ҋ', 'ҋ', 'Ҍ', 'ҍ', 'Ҏ', 'ҏ', 'Ґ', 'ґ', 'Ғ', 'ғ', 'Ҕ', 'ҕ', 'Җ', 'җ', 'Ҙ', 'ҙ', 'Қ', 'қ', 'Ҝ', 'ҝ', 'Ҟ', 'ҟ', 'Ҡ', 'ҡ', 'Ң', 'ң', 'Ҥ', 'ҥ', 'Ҧ', 'ҧ', 'Ҩ', 'ҩ', 'Ҫ', 'ҫ', 'Ҭ', 'ҭ', 'Ү', 'ү', 'Ұ', 'ұ', 'Ҳ', 'ҳ', 'Ҵ', 'ҵ', 'Ҷ', 'ҷ', 'Ҹ', 'ҹ', 'Һ', 'һ', 'Ҽ', 'ҽ', 'Ҿ', 'ҿ', 'Ӏ', 'Ӂ', 'ӂ', 'Ӄ', 'ӄ', 'Ӆ', 'ӆ', 'Ӈ', 'ӈ', 'Ӊ', 'ӊ', 'Ӌ', 'ӌ', 'Ӎ', 'ӎ', 'ӏ', 'Ӑ', 'ӑ', 'Ӓ', 'ӓ', 'Ӕ', 'ӕ', 'Ӗ', 'ӗ', 'Ә', 'ә', 'Ӛ', 'ӛ', 'Ӝ', 'ӝ', 'Ӟ', 'ӟ', 'Ӡ', 'ӡ', 'Ӣ', 'ӣ', 'Ӥ', 'ӥ', 'Ӧ', 'ӧ', 'Ө', 'ө', 'Ӫ', 'ӫ', 'Ӭ', 'ӭ', 'Ӯ', 'ӯ', 'Ӱ', 'ӱ', 'Ӳ', 'ӳ', 'Ӵ', 'ӵ', 'Ӷ', 'ӷ', 'Ӹ', 'ӹ', 'Ӻ', 'ӻ', 'Ӽ', 'ӽ', 'Ӿ', 'ӿ', 'Ԛ', 'ԛ', 'Ԝ', 'ԝ', 'Ԥ', 'ԥ', 'Ṣ', 'ṣ', 'Ạ', 'ạ', 'Ả', 'ả', 'Ấ', 'ấ', 'Ầ', 'ầ', 'Ẩ', 'ẩ', 'Ẫ', 'ẫ', 'Ậ', 'ậ', 'Ắ', 'ắ', 'Ằ', 'ằ', 'Ẳ', 'ẳ', 'Ẵ', 'ẵ', 'Ặ', 'ặ', 'Ẹ', 'ẹ', 'Ẻ', 'ẻ', 'Ẽ', 'ẽ', 'Ế', 'ế', 'Ề', 'ề', 'Ể', 'ể', 'Ễ', 'ễ', 'Ệ', 'ệ', 'Ỉ', 'ỉ', 'Ị', 'ị', 'Ọ', 'ọ', 'Ỏ', 'ỏ', 'Ố', 'ố', 'Ồ', 'ồ', 'Ổ', 'ổ', 'Ỗ', 'ỗ', 'Ộ', 'ộ', 'Ớ', 'ớ', 'Ờ', 'ờ', 'Ở', 'ở', 'Ỡ', 'ỡ', 'Ợ', 'ợ', 'Ụ', 'ụ', 'Ủ', 'ủ', 'Ứ', 'ứ', 'Ừ', 'ừ', 'Ử', 'ử', 'Ữ', 'ữ', 'Ự', 'ự', 'Ỳ', 'ỳ', 'Ỵ', 'ỵ', 'Ỷ', 'Ỹ', 'ỹ', '–', '—', '―', '‘', '’', '‚', '“', '”', '„', '†', '‡', '•', '…', '‰', '‹', '›', '⁰', '⁴', '₠', '₡', '₢', '₣', '₤', '₥', '₦', '₧', '₨', '₩', '₪', '₫', '€', '₭', '₮', '₯', '₰', '₱', '₲', '₳', '₴', '₵', '₶', '₷', '₸', '₹', '₺', '₻', '₼', '₽', '₾', '₿', '№', '™', 'ℳ', '∶'];
let preguntasNumericas = ['¿En que año naciste?', '¿Que edad tienes?', '¿Dia de tus cumpleaños?', '¿Numero favorito?', '¿Mes de tu cumpleaños?'];
let preguntasAlfanumericas = ['¿Primer Nombre?', '¿Primer Apellido?', '¿Hobbit?', '¿Que es lo que ma te gusta hacer?', '¿Nombre de persona especial?'];
function div_generador() {
    $('#div-generador').css('display','none');
    $('#div-generador-2').css('display','block');
    
    if ($('input:radio[name=opcion]:checked').val()=='1') {
        $('#btn-generador-2').html('Generar');
        $('#div-cantidad').css('display','block');
    }
    else if ($('input:radio[name=opcion]:checked').val()=='2') {
        $('#btn-generador-2').html('Continuar');
        $('#div-cantidad').css('display','none');
        $('#div-generador-datos').html('');
    }
}

function inicio() {
    $('#div-generador').css('display','block');
    $('#div-generador-2').css('display','none');
}

function generarDatos() {
    if($('#tipo').val() == 'numerica') {
        let concat = '';
        if (Math.floor(Math.random() * (2 - 0)) + 0) {
            concat += $('#respuesta1').val()+""+$('#respuesta2').val();
        }else{
            concat += $('#respuesta2').val()+""+$('#respuesta1').val();
        }

        if (concat.length <= 4) {
            concat += $('#respuesta'+(Math.floor(Math.random() * (3 - 1)) + 1)).val();
            if (concat.length <= 4) {
                concat += $('#respuesta'+(Math.floor(Math.random() * (3 - 1)) + 1)).val();
            }
        }
        mostrarResultado(concat);
    }
    else if($('#tipo').val() == 'alfanumerica') {
        let simbolos = ['/','%','$','#','!','(',')','=',',',':','.','-','_','?','&','¿','ñ',';',']','[','{','}','*','+'];
        let concat ='';
        switch ($('#dificultad').val()) {
            case 'facil':
                if (Math.floor(Math.random() * (2 - 0)) + 0) {
                    concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                }else{
                    concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                }
                break;
            case 'media':
                switch (Math.floor(Math.random() * (6 - 0)) + 0) {
                    case 0:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 1:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 2:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 3:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 4:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 5:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                }
                break;
            case 'dificil':
                switch (Math.floor(Math.random() * (26 - 0)) + 0) {
                    case 0:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 1:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 2:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 3:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 4:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 5:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 6:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 7:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 8:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 9:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 10:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 11:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 12:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 13:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 14:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 15:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 16:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 17:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 18:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 19:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 20:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 21:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 22:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 23:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 24:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                    case 25:
                        concat += simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta4').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta3').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta2').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0]+$('#respuesta1').val()+simbolos[Math.floor(Math.random() * (simbolos.length - 0)) + 0];
                        break;
                }
                break;
        }
        let conc = '';
        for (let i = 0; i < concat.length; i++) {
            if (Math.floor(Math.random() * (2 - 0)) + 0) {
                conc += concat[i].toUpperCase();
            }else{
                conc += concat[i].toLowerCase();
            }
        }
        mostrarResultado(conc);
    }
}

function generar() {
    $('#div-generador').css('display','none');
    $('#div-generador-2').css('display','block');
    let concat='';
    if ($('input:radio[name=opcion]:checked').val()=='1') {
        
        if($('#tipo').val() == 'numerica') {
            for (let i = 0; i < $('#cantidad').val(); i++) {
                concat += Math.floor(Math.random() * (9 - 0)) + 0;
            }          
        }
        else if($('#tipo').val() == 'alfanumerica') {
            switch ($('#dificultad').val()) {
                case 'facil':
                    console.log(concat);
                    for (let i = 0; i < $('#cantidad').val(); i++) {
                        concat += facil[Math.floor(Math.random() * (facil.length - 0)) + 0];
                    }   
                    break;
                case 'media':
                    for (let i = 0; i < $('#cantidad').val(); i++) {
                        concat += media[Math.floor(Math.random() * (media.length - 0)) + 0];
                    } 
                    break;
                case 'dificil':
                    for (let i = 0; i < $('#cantidad').val(); i++) {
                        concat += dificil[Math.floor(Math.random() * (dificil.length - 0)) + 0];
                    } 
                    break;
            }        
        }
        mostrarResultado(concat);
    }
    else if ($('input:radio[name=opcion]:checked').val()=='2') {
        if($('#tipo').val() == 'numerica') {
            for (let i = 0; i < 2; i++) {
                concat += `
                    <div class="form-group">
                        <label for="">${preguntasNumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                        <input type="number" id="respuesta${i+1}" class="form-control" autocomplete="off">
                    </div>                        
                `; 
            }   
            //alert(concat);         
        }
        else if($('#tipo').val() == 'alfanumerica') {
            
            console.log($('#dificultad').val());
            switch ($('#dificultad').val()) {
                case 'facil':
                    for (let i = 0; i < 1; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasNumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta1" class="form-control" autocomplete="off">
                            </div>                        
                        `; 
                    }
                    for (let i = 0; i < 1; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasAlfanumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta2" class="form-control" autocomplete="off">
                            </div>                        
                        `; 
                    }     
                    break;
                case 'media':
                    for (let i = 0; i < 1; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasNumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta1" class="form-control" autocomplete="off">
                            </div>                        
                        `; 
                    }
                    for (let i = 0; i < 2; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasAlfanumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta${i+2}" class="form-control" autocomplete="off">
                            </div>                        
                        `;
                    } 
                    break;
                case 'dificil':
                    for (let i = 0; i < 2; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasNumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta${i+1}" class="form-control" autocomplete="off">
                            </div>                        
                        `; 
                    } 
                    for (let i = 0; i < 2; i++) {
                        concat += `
                            <div class="form-group">
                                <label for="">${preguntasAlfanumericas[Math.floor(Math.random() * (5 - 0)) + 0]}</label>
                                <input type="text" id="respuesta${i+3}" class="form-control" autocomplete="off">
                            </div>                        
                        `;
                    } 
                break;
            }    
        }
        concat += `
            <center>
                <button type="button" class="btn btn-light" onclick="div_generador()" style="margin-right: 10px;">Atras</button>
                <button type="button" class="btn btn-light" onclick="generarDatos()">Generar</button>
            </center>
        `;
        $('#div-generador-datos').html(concat);
        $('#div-generador-2').css('display','none');
        $('#div-generador-datos').css('display','block');
    }
}

$('#tipo').on('change', function () {
    if ($('#tipo').val()!='numerica') {
        $('#difil').css('display','block');
    }else{
        $('#difil').css('display','none');
    }
})

function mostrarResultado(parametro) {
    Swal.fire({
        title: parametro,
        imageUrl: '../Recursos/img/candado.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'candado',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar Clave',
        cancelButtonText: 'Copiar Clave',
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(() => {
                $('#swal2-html-container').attr('style','padding-left: 0px;');                    
            }, 100);
            Swal.fire({
                title: 'Guardar Clave',
                html: `
                <input type="text" id="alias" class="swal2-input" placeholder="Alias">
                <label>Mencione donde utilizara su clave</label>
                
                <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
                <label>Mencione usuario que utilizara</label>
                
                <input type="text" id="clave" class="swal2-input" value="${parametro}" placeholder="clave">
                <label>Puedes modificar la clave generada</label>`,
                confirmButtonText: 'Guardar',
                focusConfirm: false,
                preConfirm: () => {
                  const alias = Swal.getPopup().querySelector('#alias').value
                  const usuario = Swal.getPopup().querySelector('#usuario').value
                  const clave = Swal.getPopup().querySelector('#clave').value
                  if (!alias || !usuario|| !clave) {
                    Swal.showValidationMessage(`Por favor ingrese todos los datos   `)
                  }
                  return { alias: alias, usuario: usuario , clave: clave }
                }
              }).then((result) => {
                let contrasena ='';

                for (let i = 0; i < 100; i++) {
                    contrasena  += facil[Math.floor(Math.random() * (facil.length - 0)) + 0];
                }
                
                let datos = {
                    alias: result.value.alias,
                    usuario: result.value.usuario,
                    clave: result.value.clave,
                    contrasena: contrasena,
                    operacion: 'guardarClave'
                }
                
                $.post('../Controlador/clave.controlador.php', datos, function (respuesta) {
                    if (respuesta == '1') {
                        Swal.fire(
                            'Se guardo la clave con exito',
                            '',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'No se logro guardar la clave',
                            'Por favor vuelve a intentar mas tarde',
                            'error'
                        )
                    }
                })
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            var aux = document.createElement("input");
            aux.setAttribute("value", concat);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            Swal.fire(
                'Clave Copiada en el porta papeles!',
                '',
                'success'
            )
        }
        $('#cantidad').val('');
        $('#div-generador-datos').html('');
        inicio();
    })
}