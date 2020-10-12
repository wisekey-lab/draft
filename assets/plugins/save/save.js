            "use strict"; // Start of use strict

            (function () {
                function1();
                function2();
                function3();
                function4();
            })();
            function function1() {
                $('.save1').on("click", function () {
                    swal({
                        title: "Here's a message!",
                        text: "It's pretty, isn't it?"
                    });
                });
            }

            function function2() {
                $('.save2').on("click", function () {
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        type: "success"
                    });
                });
            }

            function function3() {
                $('.save3').on("click", function () {
                    swal({
                        title: "저장하시겠습니까?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#0985d3",
                        confirmButtonText: "Yes, Save it!",
                        closeOnConfirm: false
                    },
                            function () {
                                swal("Save Success!", "Data has been Save.", "success");
                            });
                });
            }

            function function4() {
                $('.del1').on("click", function () {
                    swal({
                        title: "삭제하시겠습니까?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#d12121",
                        confirmButtonText: "Yes, Delete it!",
                        closeOnConfirm: false
                    },
                            function () {
                                swal("Deleted!", "Data has been deleted.", "success");
                            });
                });
            }