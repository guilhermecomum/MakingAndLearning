/* Many progress bar
   set how many complete it is
   get how many complete it is
*/

(function () {
    function Progress(name) {
        this.progress = 0;
        this.name = name;
    }

    Progress.prototype.status = function () {
        console.log(this.progress);
    };

    Progress.prototype.update = function () {
        this.progress += 1;
        document.getElementById(this.name).style.width = this.progress + "%";
        console.log(this.progress);
    };

    Progress.prototype.run = function () {
        this.clock = setInterval(this.update, 1000);
    }

    Progress.prototype.pause = function () {
        clearInterval(this.clock);
    }

    Progress.prototype.setStart = function (x) {
        this.progress = x;
    };

    return Progress;

}());
