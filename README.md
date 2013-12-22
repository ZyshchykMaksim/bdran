jQuery plugin  random background
==========================
### Options

 colors - Array colors
 
 images - Array images
 
 timeout - The timeout in milliseconds
 
 type - image or color (if 'color' is selected performed an array of colors, and then the 'image' - array image)

### Installation

Warning: You need to connect [jquery-color](https://github.com/jquery/jquery-color)

    <script src="jquery-1.9.1.js"></script>
    <script src="jquery.color-2.1.2.min.js"></script>
    <script src="bgran.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('body').bgran({
                colors: ["#DF624E", "#B5C6CA", "#77B8B1", "#916D58", "#0099cc", "#ea4c88", "#ffcc33"],
                images: ['../Image/1.jpg")','../Image/2.jpg','../Image/3.jpg'],
                timeout: 10000,
                type: 'image' // or color
            });
        });
    </script>


### License

Zyshchyk Maksim is Copyright &copy; 2013  and is licensed under the terms of the [MIT License](http://www.opensource.org/licenses/mit-license.php).
