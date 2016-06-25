(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'template/main.html'
        })
            .Class({
                constructor: function() {
                    // closed=0   open=1
                    this.stateworks='closed';
                    this.statearts='closed';
                    this.artsopened = false;
                    this.worksopened = false;
                    this.enterarts='enterclosed';
                    this.enterworks='enterclosed';
                    this.righwordexp='explenationworld';
                    this.leftwordexp='explenationworld';
                    
                    this.openworks=function () {
                        this.worksopened = !this.worksopened;
                        this.stateworks = this.worksopened ? 'opened' : 'closed';
                        this.enterworks=this.worksopened ? 'enteropened' : 'enterclosed';
                        this.leftwordexp = this.worksopened ? 'explenationworldopend' : 'explenationworld';
                        if(this.artsopened)
                        {   this.statearts='closed';
                            this.enterarts='enterclosed';
                            this.artsopened = false;
                            this.righwordexp='explenationworld';

                        }


                    };
                    this.openarts=function () {
                        this.artsopened = !this.artsopened;
                        this.statearts = this.artsopened ? 'opened' : 'closed';
                        this.enterarts = this.artsopened ? 'enteropened' : 'enterclosed';
                        this.righwordexp = this.artsopened ? 'explenationworldopend' : 'explenationworld';
                        if(this.worksopened)
                        {   this.stateworks='closed';
                            this.enterworks='enterclosed';
                            this.worksopened = false;
                            this.leftwordexp='explenationworld';}
                    };


                    
                }
            });
})(window.app || (window.app = {}));
