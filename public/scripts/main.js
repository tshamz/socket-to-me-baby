!function(n,i,t){var o=(i("body"),function(){});n.init=function(){o()}}(window.Messages=window.Messages||{},jQuery),function(n,i,t){var o=io(),e=function(){i(".gameboard g").on("click",function(){i(this).off("click");var n=i(this).attr("id")[0],t=i(this).attr("id")[1];o.emit("turnStart",{row:n,col:t})})};o.on("turnFinish",function(n){i(".gameboard g#"+n.row+n.col).find("use")[0].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#player-token-"+n.token)}),o.on("winner",function(n){i(".gameboard g").off("click"),i("<div />",{text:n+" wins!","class":"winner-winner-whats-for-dinner"}).prependTo(".gameboard")}),n.init=function(){e()}}(window.Gameplay=window.Gameplay||{},jQuery),function(){Gameplay.init(),Messages.init()}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvZHkuanMiLCJHYW1lcGxheS5qcyIsImluaXQuanMiXSwibmFtZXMiOlsiTWVzc2FnZXMiLCIkIiwidW5kZWZpbmVkIiwiYmluZFVJQWN0aW9ucyIsImluaXQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJHYW1lcGxheSIsInNvY2tldCIsImlvIiwib24iLCJ0aGlzIiwib2ZmIiwicm93IiwiYXR0ciIsImNvbCIsImVtaXQiLCJkYXRhIiwiZmluZCIsInNldEF0dHJpYnV0ZU5TIiwidG9rZW4iLCJ0ZXh0IiwiY2xhc3MiLCJwcmVwZW5kVG8iXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEdBR0EsR0FHQUMsSUFIQUYsRUFBQSxRQUdBLGFBT0FELEdBQUFJLEtBQUEsV0FDQUQsTUFHQUUsT0FBQUwsU0FBQUssT0FBQUwsYUFBQU0sUUNqQkEsU0FBQUMsRUFBQU4sRUFBQUMsR0FHQSxHQUFBTSxHQUFBQyxLQUVBTixFQUFBLFdBQ0FGLEVBQUEsZ0JBQUFTLEdBQUEsUUFBQSxXQUNBVCxFQUFBVSxNQUFBQyxJQUFBLFFBQ0EsSUFBQUMsR0FBQVosRUFBQVUsTUFBQUcsS0FBQSxNQUFBLEdBQ0FDLEVBQUFkLEVBQUFVLE1BQUFHLEtBQUEsTUFBQSxFQUNBTixHQUFBUSxLQUFBLGFBQUFILElBQUFBLEVBQUFFLElBQUFBLE1BSUFQLEdBQUFFLEdBQUEsYUFBQSxTQUFBTyxHQUNBaEIsRUFBQSxnQkFBQWdCLEVBQUFKLElBQUFJLEVBQUFGLEtBQUFHLEtBQUEsT0FBQSxHQUFBQyxlQUFBLCtCQUFBLGFBQUEsaUJBQUFGLEVBQUFHLFNBR0FaLEVBQUFFLEdBQUEsU0FBQSxTQUFBVSxHQUNBbkIsRUFBQSxnQkFBQVcsSUFBQSxTQUNBWCxFQUFBLFdBQUFvQixLQUFBRCxFQUFBLFNBQUFFLFFBQUEsbUNBQUFDLFVBQUEsZ0JBSUFoQixFQUFBSCxLQUFBLFdBQ0FELE1BR0FFLE9BQUFFLFNBQUFGLE9BQUFFLGFBQUFELFFDNUJBLFdBRUFDLFNBQUFILE9BQ0FKLFNBQUFJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oTWVzc2FnZXMsICQsIHVuZGVmaW5lZCkge1xuXG4gIC8vIFByaXZhdGVcbiAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuXG5cbiAgdmFyIGJpbmRVSUFjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyAkYm9keS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICRib2R5LmhpZGUoKTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICAvLyBQdWJsaWNcbiAgTWVzc2FnZXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGJpbmRVSUFjdGlvbnMoKTtcbiAgfTtcblxufSh3aW5kb3cuTWVzc2FnZXMgPSB3aW5kb3cuTWVzc2FnZXMgfHwge30sIGpRdWVyeSkpO1xuIiwiKGZ1bmN0aW9uKEdhbWVwbGF5LCAkLCB1bmRlZmluZWQpIHtcblxuICAvLyBQcml2YXRlXG4gIHZhciBzb2NrZXQgPSBpbygpO1xuXG4gIHZhciBiaW5kVUlBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgJCgnLmdhbWVib2FyZCBnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcbiAgICAgIHZhciByb3cgPSAkKHRoaXMpLmF0dHIoJ2lkJylbMF07XG4gICAgICB2YXIgY29sID0gJCh0aGlzKS5hdHRyKCdpZCcpWzFdO1xuICAgICAgc29ja2V0LmVtaXQoJ3R1cm5TdGFydCcsIHsncm93Jzogcm93LCAnY29sJzogY29sfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc29ja2V0Lm9uKCd0dXJuRmluaXNoJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICQoJy5nYW1lYm9hcmQgZyMnKyBkYXRhLnJvdyArIGRhdGEuY29sKS5maW5kKCd1c2UnKVswXS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICd4bGluazpocmVmJywgJyNwbGF5ZXItdG9rZW4tJyArIGRhdGEudG9rZW4pO1xuICB9KTtcblxuICBzb2NrZXQub24oJ3dpbm5lcicsIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgJCgnLmdhbWVib2FyZCBnJykub2ZmKCdjbGljaycpO1xuICAgICQoJzxkaXYgLz4nLCB7dGV4dDogdG9rZW4gKyAnIHdpbnMhJywgJ2NsYXNzJzogJ3dpbm5lci13aW5uZXItd2hhdHMtZm9yLWRpbm5lcid9KS5wcmVwZW5kVG8oJy5nYW1lYm9hcmQnKTtcbiAgfSk7XG5cbiAgLy8gUHVibGljXG4gIEdhbWVwbGF5LmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBiaW5kVUlBY3Rpb25zKCk7XG4gIH07XG5cbn0od2luZG93LkdhbWVwbGF5ID0gd2luZG93LkdhbWVwbGF5IHx8IHt9LCBqUXVlcnkpKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICBHYW1lcGxheS5pbml0KCk7XG4gIE1lc3NhZ2VzLmluaXQoKTtcblxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==