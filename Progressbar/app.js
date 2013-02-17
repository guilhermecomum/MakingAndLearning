(function () {
    function Progress(name) {
        this.progress = 0;
        this.name = name;
    }

    Progress.prototype.status = function () {
        console.log(this.progress);
    };

    Progress.prototype.update = function (value) {
        this.progress =  Math.min(100, value);
        document.getElementById(this.name).style.width = this.progress + "%";
    };

    window.Progress = Progress;

}());

function goProgress()
{
    var i=0;

    var barra = new Progress('progress');

    barra.status();

    setInterval(function(){
        if( i <= 100 ) {
            barra.update(i);
            console.log(i);
        }
        i = i + 5;
    },1000);
}
