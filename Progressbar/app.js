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
