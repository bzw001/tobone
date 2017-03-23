;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M647.953392 110.1057l123.517151 0 0 752.718457-123.517151 0 0-752.718457Z"  ></path>' +
    '' +
    '<path d="M252.529457 110.1057l123.517151 0 0 752.718457-123.517151 0 0-752.718457Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.781 281.743C387.857-4.082 35.603 62.608 33.284 394.354 32 576.556 201.017 644.668 313.556 717.499c109.122 70.644 186.786 167.274 198.954 208.413 10.419-40.302 96.924-139.671 197.934-210.387C820.895 638.209 992 574.576 990.716 392.374 988.385 59.8 630.005 7.315 511.781 281.743z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-less" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-moreunfold" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1022.72C230.4 1022.72 1.312 793.632 1.312 512 1.312 230.4 230.4 1.312 512 1.312 793.6 1.312 1022.688 230.4 1022.688 512 1022.688 793.632 793.6 1022.72 512 1022.72zM512 65.312C265.696 65.312 65.312 265.696 65.312 512c0 246.304 200.384 446.72 446.688 446.72 246.336 0 446.688-200.416 446.688-446.72C958.688 265.696 758.304 65.312 512 65.312z"  ></path>' +
    '' +
    '<path d="M336 274.496 753.312 512 336 749.504Z"  ></path>' +
    '' +
    '<path d="M336 765.504c-2.784 0-5.568-0.704-8.032-2.144C323.008 760.48 320 755.2 320 749.504L320 274.496c0-5.696 3.04-10.976 7.968-13.824 4.928-2.88 11.008-2.88 15.968-0.064l417.344 237.504c4.992 2.848 8.096 8.16 8.096 13.92s-3.104 11.072-8.096 13.92l-417.312 237.504C341.44 764.8 338.72 765.504 336 765.504zM352 302.016l0 419.968L720.96 512 352 302.016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1017.856 460.8l-185.344-233.472c-20.48-25.6-58.368-25.6-78.848 0L569.344 460.8c-14.336 17.408-1.024 44.032 21.504 44.032l72.704 0c-2.048 136.192-2.048 309.248-240.64 447.488-6.144 4.096-3.072 13.312 4.096 12.288 456.704-70.656 493.568-376.832 494.592-458.752l75.776 0C1019.904 504.832 1032.192 478.208 1017.856 460.8z"  ></path>' +
    '' +
    '<path d="M434.176 519.168l-72.704 0c2.048-136.192 2.048-309.248 240.64-447.488 6.144-4.096 3.072-13.312-4.096-12.288-456.704 70.656-493.568 377.856-494.592 458.752l-75.776 0c-22.528 0-35.84 26.624-21.504 44.032l185.344 233.472c20.48 25.6 58.368 25.6 78.848 0l185.344-233.472C468.992 545.792 456.704 519.168 434.176 519.168z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.758039 772.076606c143.402667-195.931798 100.662303-472.029091-95.268202-615.431758-195.931798-143.402667-472.031677-100.666182-615.434343 95.264323-34.828929 47.586263-59.380364 100.552404-73.024646 157.477495-2.963394 12.351354 4.659717 24.777697 17.031758 27.755313 12.368162 2.950465 24.780283-4.688162 27.760485-17.027879 12.201374-50.934949 34.183758-98.364768 65.378263-140.986182 128.417616-175.45697 375.620525-213.718626 551.076202-85.302303s213.736727 375.59596 85.320404 551.050343C697.180342 920.332929 449.977433 958.603636 274.523049 830.188606 196.463736 773.056646 142.289999 689.577374 121.949635 595.109495c-2.684121-12.435394-14.910061-20.332606-27.366141-17.662707-12.422465 2.667313-20.355879 14.950141-17.658828 27.367434 22.706424 105.500444 83.207758 198.743919 170.387394 262.54998C443.271009 1010.76299 719.355373 968.007111 862.758039 772.076606L862.758039 772.076606z"  ></path>' +
    '' +
    '<path d="M512.000544 512"  ></path>' +
    '' +
    '<path d="M590.464544 590.444606c-69.444525 69.447111-182.438788 69.447111-251.88202 0.006465-69.445818-69.440646-69.445818-182.42198 0-251.862626 69.443232-69.443232 182.437495-69.443232 251.88202 0C659.893554 408.029091 659.893554 521.010424 590.464544 590.444606L590.464544 590.444606zM377.424706 377.402182c-48.041374 48.03103-48.041374 126.192485-0.016808 174.222222 48.023273 48.03103 126.205414 48.023273 174.228687-0.006465 48.025859-48.03103 48.025859-126.17697 0-174.205414C503.612019 329.381495 425.429878 329.373737 377.424706 377.402182L377.424706 377.402182zM727.60814 673.83596c13.194343 13.194343 13.194343 34.589737 0 47.785374l-5.97204 5.97204c-13.194343 13.202101-34.583273 13.202101-47.793131 0l-122.436525-122.441697c-13.195636-13.203394-13.195636-34.589737 0-47.784081l5.973333-5.979798c13.191758-13.195636 34.598788-13.195636 47.793131 0L727.60814 673.83596 727.60814 673.83596zM727.60814 673.83596"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-207" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M674.769775 864.317688l-446.337431 0c-1.987356 0-3.970619-0.212858-5.912947-0.635504-3.182635-0.691788-19.852069-4.985787-35.627091-21.617357-13.22175-13.940146-28.981422-40.231166-28.981422-86.315925 0-70.074253-0.453346-568.868877-0.464603-581.584066-0.045028-3.433357 0.02149-22.315285 6.358106-43.135449 10.102563-33.195599 31.593024-55.261185 60.517138-62.128923 2.107089-0.500421 4.267392-0.753189 6.432811-0.753189l518.717304 0c0.680531 0 1.362086 0.024561 2.041594 0.074705 2.712915 0.199554 27.236601 2.31483 52.451052 14.930754 37.027041 18.526824 57.417395 50.765586 57.417395 90.778777 0 87.514274 0.105406 531.204285 0.106429 535.676348 0.002047 8.467242-3.851909 16.47602-10.467901 21.760627l-158.878978 126.864331C687.206612 862.173759 681.082854 864.317688 674.769775 864.317688zM233.483625 808.642044l431.536644 0 140.78708-112.419672c-0.01842-75.190006-0.104382-443.407565-0.104382-522.290861 0-18.472586-8.102927-31.309555-25.502014-40.397973-13.848044-7.234099-28.528075-9.297183-32.103679-9.710618l-513.376413 0c-21.115913 7.976031-21.616334 49.090353-21.6061 49.518116 0.005117 0.188297 0.007163 0.376595 0.007163 0.564892 0.00307 5.104496 0.46358 511.195643 0.46358 581.841952C213.584482 794.057184 228.033235 805.638496 233.483625 808.642044z"  ></path>' +
    '' +
    '<path d="M487.981851 227.7907l-188.297373 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l188.297373 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S504.937825 227.7907 487.981851 227.7907z"  ></path>' +
    '' +
    '<path d="M721.306857 383.340703l-421.622378 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l421.622378 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S738.26283 383.340703 721.306857 383.340703z"  ></path>' +
    '' +
    '<path d="M721.306857 534.797286l-421.622378 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l421.622378 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S738.26283 534.797286 721.306857 534.797286z"  ></path>' +
    '' +
    '<path d="M631.251591 796.776239c-16.95495 0-30.700659-13.745708-30.700659-30.700659l0-126.896055c0-16.95495 13.745708-30.700659 30.700659-30.700659l130.989477 0c16.95495 0 30.700659 13.745708 30.700659 30.700659s-13.745708 30.700659-30.700659 30.700659l-100.288818 0 0 96.195397C661.95225 783.031554 648.207565 796.776239 631.251591 796.776239z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti5" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M807.991351 453.867243c0.83027-61.910486 0.608865-37.237622 0-94.498595L20.618378 359.368649c0.138378 55.240649 0.138378 32.934054 0 94.498595L807.991351 453.867243zM1010.729514 508.60973c-17.297297-75.706811-81.518703-129.480649-172.502486-148.493838 0.470486 10.24 0.774919 20.549189 0.774919 30.941405 0 14.986378 1.439135 48.141838 0.484324 62.809946 46.619676 17.712432 73.119135 32.034595 82.916324 74.918054 18.667243 81.532541-57.731459 168.544865-170.620541 194.380108-3.805405 0.871784-7.569297 1.480649-11.333189 2.186378-17.048216 26.928432-36.089081 51.725838-56.804324 74.115459 26.264216-0.691892 53.289514-3.846919 80.633081-10.115459C927.315027 752.086486 1037.671784 626.342054 1010.729514 508.60973zM20.618378 926.277189c-1.702054 2.781405-0.138378 28.672 0 31.508757 2.006486 39.852973 177.110486 62.976 409.433946 62.976s409.420108-21.158054 409.420108-62.976c0-2.822919-2.24173-31.688649 0-31.508757L20.618378 926.277189zM496.750703 239.616c0 67.307243-126.201081 84.134054-126.201081 84.134054s218.278054 0 218.278054-84.134054c0-84.147892-239.283892-67.307243-239.283892-134.614486 0-67.307243 168.25427-100.960865 168.25427-100.960865s-278.694054 0-278.694054 117.773838C239.076324 222.803027 496.750703 189.149405 496.750703 239.616z"  ></path>' +
    '' +
    '<path d="M429.263568 898.186378c200.344216 0 346.568649-154.873081 377.939027-377.939027l-787.372973 0C51.2 743.313297 228.933189 898.186378 429.263568 898.186378z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M555.264 960.896c-228.352 0-414.08-185.728-414.08-414.144 0-228.288 185.728-414.08 414.08-414.08 228.288 0 414.08 185.728 414.08 414.08C969.344 775.104 783.552 960.896 555.264 960.896zM555.264 196.672c-193.024 0-350.08 157.056-350.08 350.08 0 193.088 157.056 350.144 350.08 350.144 193.024 0 350.08-157.056 350.08-350.144C905.344 353.728 748.224 196.672 555.264 196.672z"  ></path>' +
    '' +
    '<path d="M511.424 344.384l64 0 0 248.704-64 0 0-248.704Z"  ></path>' +
    '' +
    '<path d="M566.078662 570.416442l127.074355 127.074355-45.2544 45.2544-127.074355-127.074355 45.2544-45.2544Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaotizhongdian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M959.430402 511.745197 63.981197 64.020082l191.882192 447.725114L63.981197 959.469288 959.430402 511.745197zM127.941927 127.980813 863.49033 495.755014 287.843754 495.755014 127.941927 127.980813z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti212" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M460.438758 1011.187959 460.438758 1011.187959c-24.444026 0-45.347883-10.102728-47.647789-11.258702-35.558231-20.879774-88.696896-33.908561-136.681844-33.908561-40.519285 0-75.884854 8.862465-102.267545 25.708373-15.65381 9.982314-32.379304 15.039699-49.73095 15.039699-52.813547 0-91.622954-47.431044-93.2365-49.453998l-4.660019-5.767827L26.214111 127.56651l8.200188-6.30969C103.014111 68.23857 178.33302 41.350141 258.299906 41.350141c150.011665 0 262.634807 94.091439 267.367074 98.089182l7.453622 6.321731-0.445532 800.86096C524.089558 987.634995 497.755033 1011.187959 460.438758 1011.187959zM432.888053 962.793603c0.168579 0 13.570649 6.153151 27.550706 6.153151l0 0c11.76444 0 24.504233-3.504045 30.44064-28.911383L490.879398 165.846096c-26.286359-19.687676-118.92079-82.266792-232.579492-82.266792-67.251176 0-131.082596 21.831044-189.844591 64.891063l0 787.434807c9.235748 9.440452 31.078833 28.622389 55.667357 28.622389 9.307996 0 18.134337-2.757479 27.020884-8.404892 33.174036-21.168768 76.390593-32.34318 124.977611-32.34318C331.920978 923.779492 391.971402 938.698777 432.888053 962.793603 432.888053 962.793603 432.876011 962.793603 432.888053 962.793603z"  ></path>' +
    '' +
    '<path d="M925.104045 1011.187959 925.104045 1011.187959c-24.444026 0-45.347883-10.102728-47.647789-11.258702-35.558231-20.879774-88.696896-33.908561-136.681844-33.908561-40.519285 0-75.884854 8.862465-102.267545 25.708373-15.641769 9.982314-32.379304 15.039699-49.73095 15.039699-52.813547 0-91.610913-47.431044-93.2365-49.453998l-4.660019-5.767827L490.879398 127.56651l8.21223-6.30969c68.58777-53.006209 143.906679-79.906679 223.873565-79.906679 150.011665 0 262.634807 94.091439 267.367074 98.089182l7.453622 6.321731-0.445532 800.86096C988.754845 987.634995 962.42032 1011.187959 925.104045 1011.187959zM897.55334 962.793603c0.180621 0 13.570649 6.153151 27.550706 6.153151l0 0c11.76444 0 24.504233-3.504045 30.44064-28.911383L955.544685 165.846096c-26.286359-19.687676-118.92079-82.266792-232.579492-82.266792-67.251176 0-131.070555 21.831044-189.844591 64.891063l0 787.434807c9.235748 9.440452 31.078833 28.622389 55.667357 28.622389 9.307996 0 18.134337-2.757479 27.020884-8.404892 33.174036-21.168768 76.390593-32.34318 124.977611-32.34318C796.586265 923.779492 856.636689 938.698777 897.55334 962.793603 897.55334 962.793603 897.541298 962.793603 897.55334 962.793603z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-changyonglianjie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M265.0112 972.8c-56.36096 0-109.184-21.78048-148.74112-61.33248l-3.72224-3.73248C72.98048 868.17792 51.2 815.34976 51.2 758.99392c0-56.36096 21.78048-109.17888 61.33248-148.72576l118.4-118.4c2.49344 29.52704 8.92416 58.33216 19.23584 86.06208l-84.99712 84.992c-52.96128 52.98176-52.96128 139.18208 0 192.16384l3.75296 3.75296c25.6256 25.62048 59.74528 39.73632 96.0768 39.73632s70.4512-14.11584 96.08192-39.73632l202.38848-202.3936c52.98176-52.98688 52.98176-139.19232 0-192.16384l-3.74272-3.74784c-3.7376-3.7376-7.77216-7.28576-12.06784-10.62912l52.89984-52.88448c4.18304 3.54816 8.09984 7.14752 11.82208 10.86976l3.74272 3.7376c82.00704 82.00704 82.00704 215.45472-0.00512 297.46176l-202.37312 202.37824C374.18496 951.01952 321.37216 972.8 265.0112 972.8zM423.44448 626.9952c-4.19328-3.5584-8.11008-7.16288-11.81184-10.86464l-3.74272-3.74784c-39.552-39.552-61.33248-92.36992-61.33248-148.72576 0-56.36096 21.78048-109.17376 61.33248-148.72576l202.368-202.39872C649.8048 72.98048 702.62784 51.2 758.98368 51.2c56.36096 0 109.18912 21.78048 148.74112 61.33248l3.72736 3.73248C951.01952 155.83744 972.8 208.65536 972.8 265.0112s-21.78048 109.17888-61.33248 148.73088l-118.4 118.4c-2.49344-29.5168-8.92416-58.32704-19.23584-86.05696l84.99712-84.99712c52.97664-52.97152 52.97664-139.17696 0.00512-192.16384l-3.77856-3.75808c-25.60512-25.60512-59.7248-39.72096-96.05632-39.72096s-70.4512 14.11584-96.08192 39.74144L460.52864 367.55968c-25.63584 25.63072-39.74656 59.75552-39.74656 96.09216s14.11072 70.45632 39.74656 96.0768l3.74784 3.74784c3.73248 3.73248 7.76704 7.28576 12.06272 10.624L423.44448 626.9952z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M641.750109 384.100028l205.227128-204.519-0.704035 115.89966c-0.282433 9.611915 7.489578 18.09103 17.101493 17.808598l12.297071 0c9.611915-0.283456 17.667382-5.936199 17.808598-15.689331l0.565888-172.57752c0-0.14224 0.282433-9.187243 0.282433-9.187243 0.14224-4.804423-0.99056-9.187243-4.100388-12.297071-3.109828-3.109828-7.347339-5.086855-12.297071-4.946662l-8.763594 0.14224c-0.141216 0-0.278339 0-0.420579 0.14224L697.581696 98.166787c-9.611915 0.283456-17.667382 8.200776-17.808598 17.950837l0 12.297071c1.416256 11.44875 10.458189 18.092054 20.070104 17.808598l112.789832 0.283456-204.66124 203.814965c-9.329483 9.329483-9.329483 24.449855 0 33.778314 9.329483 9.470699 24.452925 9.470699 33.782408 0L641.750109 384.100028zM383.095141 576.889893 177.726797 780.705881l0.707105-115.338888c0.283456-9.607822-7.492648-18.086937-17.104563-17.808598l-13.001105 0c-9.611915 0.283456-17.667382 5.937223-17.808598 15.690354l-0.565888 172.718737c0 0.14224-0.282433 9.187243-0.282433 9.187243-0.14224 4.808516 0.99056 9.187243 4.096295 12.297071 3.109828 3.109828 7.351432 5.086855 12.297071 4.946662l8.762571-0.14224c0.14224 0 0.283456 0 0.425695-0.14224l171.873486 0.708128c9.607822-0.283456 17.667382-8.196683 17.808598-17.950837L344.93503 832.575226c-1.415232-11.44875-10.461259-18.092054-20.074198-17.808598L212.069977 814.483172 416.59 610.671277c9.329483-9.329483 9.329483-24.453948 0-33.782408C407.40685 567.41817 392.424624 567.41817 383.095141 576.889893L383.095141 576.889893zM894.047276 835.967486l-0.424672-172.718737c-0.283456-9.612938-8.200776-15.406898-17.809621-15.690354l-12.296047 0c-9.612938-0.278339-17.243733 8.200776-17.105586 17.808598l0.708128 115.903753L641.750109 576.889893c-9.329483-9.329483-24.452925-9.329483-33.782408 0-9.325389 9.328459-9.325389 24.452925 0 33.782408L812.490795 814.483172l-112.789832 0.283456c-9.611915-0.283456-18.515702 6.502088-20.073174 17.808598l0 12.297071c0.282433 9.611915 8.200776 17.667382 17.808598 17.950837l171.166381-0.708128c0.141216 0 0.282433 0.14224 0.424672 0.14224l8.763594 0.14224c4.803399 0.141216 9.187243-1.694595 12.296047-4.946662 3.109828-3.109828 4.238534-7.488555 4.097318-12.297071 0 0-0.14224-9.046027-0.14224-9.187243L894.047276 835.968509zM212.216309 146.506748l112.789832-0.283456c9.607822 0.283456 18.512632-6.502088 20.070104-17.808598L345.076246 116.116601c-0.283456-9.611915-8.196683-17.667382-17.808598-17.950837l-172.011632 0.708128c-0.14224 0-0.283456-0.14224-0.425695-0.14224l-8.761548-0.14224c-4.808516-0.141216-9.187243 1.694595-12.297071 4.946662-3.109828 3.109828-4.242627 7.488555-4.096295 12.297071 0 0 0.282433 9.046027 0.282433 9.187243l0.420579 172.718737c0.14224 9.608845 8.200776 15.406898 17.808598 15.686261l13.005198 0c9.611915 0.282433 17.242709-8.196683 17.10047-17.808598l-0.564865-115.334795 205.231221 203.958228c9.324366 9.329483 24.448832 9.329483 33.777291 0 9.329483-9.329483 9.329483-24.452925 0-33.782408L212.216309 146.506748 212.216309 146.506748zM212.216309 146.506748"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)