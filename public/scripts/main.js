!function(e,n,o){var a=function(){n(".gameboard g").on("click",function(){var e=n(this).attr("col"),o=n(this).attr("row");Messages.sendMessage({row:o,col:e})})};e.logMove=function(e){n('.gameboard g[row="'+e.row+'"][col="'+e.col+'"]').find("use")[0].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#player-token-"+e.token)},e.gameOver=function(e){n("<div />",{text:e+" wins!","class":"winner-winner-whats-for-dinner"}).prependTo(".gameboard")},e.init=function(){a()}}(window.Gameplay=window.Gameplay||{},jQuery),function(e,n,o){var a=location.origin.replace(/^http/,"ws"),t=new WebSocket(a);t.onmessage=function(e){var n=JSON.parse(e.data);Gameplay[n.eventType](n)},e.sendMessage=function(e){var n=JSON.stringify(e);t.send(n)}}(window.Messages=window.Messages||{},jQuery),function(){Gameplay.init()}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVwbGF5LmpzIiwiTWVzc2FnZXMuanMiLCJpbml0LmpzIl0sIm5hbWVzIjpbIkdhbWVwbGF5IiwiJCIsInVuZGVmaW5lZCIsImJpbmRVSUFjdGlvbnMiLCJvbiIsImNvbCIsInRoaXMiLCJhdHRyIiwicm93IiwiTWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImxvZ01vdmUiLCJtb3ZlIiwiZmluZCIsInNldEF0dHJpYnV0ZU5TIiwidG9rZW4iLCJnYW1lT3ZlciIsInRleHQiLCJjbGFzcyIsInByZXBlbmRUbyIsImluaXQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJob3N0IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZXBsYWNlIiwid3MiLCJXZWJTb2NrZXQiLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwicGFyc2VkTWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJldmVudFR5cGUiLCJzZXJpYWxpemVkRGF0YSIsInN0cmluZ2lmeSIsInNlbmQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEdBRUEsR0FBQUMsR0FBQSxXQUNBRixFQUFBLGdCQUFBRyxHQUFBLFFBQUEsV0FDQSxHQUFBQyxHQUFBSixFQUFBSyxNQUFBQyxLQUFBLE9BQ0FDLEVBQUFQLEVBQUFLLE1BQUFDLEtBQUEsTUFDQUUsVUFBQUMsYUFBQUYsSUFBQUEsRUFBQUgsSUFBQUEsTUFLQUwsR0FBQVcsUUFBQSxTQUFBQyxHQUNBWCxFQUFBLHFCQUFBVyxFQUFBSixJQUFBLFdBQUFJLEVBQUFQLElBQUEsTUFBQVEsS0FBQSxPQUFBLEdBQUFDLGVBQUEsK0JBQUEsYUFBQSxpQkFBQUYsRUFBQUcsUUFHQWYsRUFBQWdCLFNBQUEsU0FBQUQsR0FDQWQsRUFBQSxXQUFBZ0IsS0FBQUYsRUFBQSxTQUFBRyxRQUFBLG1DQUFBQyxVQUFBLGVBR0FuQixFQUFBb0IsS0FBQSxXQUNBakIsTUFHQWtCLE9BQUFyQixTQUFBcUIsT0FBQXJCLGFBQUFzQixRQ3ZCQSxTQUFBYixFQUFBUixFQUFBQyxHQUdBLEdBQUFxQixHQUFBQyxTQUFBQyxPQUFBQyxRQUFBLFFBQUEsTUFDQUMsRUFBQSxHQUFBQyxXQUFBTCxFQUVBSSxHQUFBRSxVQUFBLFNBQUFDLEdBQ0EsR0FBQUMsR0FBQUMsS0FBQUMsTUFBQUgsRUFBQUksS0FDQWxDLFVBQUErQixFQUFBSSxXQUFBSixJQUlBdEIsRUFBQUMsWUFBQSxTQUFBd0IsR0FDQSxHQUFBRSxHQUFBSixLQUFBSyxVQUFBSCxFQUNBUCxHQUFBVyxLQUFBRixLQUdBZixPQUFBWixTQUFBWSxPQUFBWixhQUFBYSxRQ2pCQSxXQUVBdEIsU0FBQW9CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oR2FtZXBsYXksICQsIHVuZGVmaW5lZCkge1xuXG4gIHZhciBiaW5kVUlBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgJCgnLmdhbWVib2FyZCBnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29sID0gJCh0aGlzKS5hdHRyKCdjb2wnKTtcbiAgICAgIHZhciByb3cgPSAkKHRoaXMpLmF0dHIoJ3JvdycpO1xuICAgICAgTWVzc2FnZXMuc2VuZE1lc3NhZ2Uoeydyb3cnOiByb3csICdjb2wnOiBjb2x9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBQdWJsaWNcbiAgR2FtZXBsYXkubG9nTW92ZSA9IGZ1bmN0aW9uKG1vdmUpIHtcbiAgICAkKCcuZ2FtZWJvYXJkIGdbcm93PVwiJyttb3ZlLnJvdysnXCJdW2NvbD1cIicrbW92ZS5jb2wrJ1wiXScpLmZpbmQoJ3VzZScpWzBdLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ3hsaW5rOmhyZWYnLCAnI3BsYXllci10b2tlbi0nICsgbW92ZS50b2tlbik7XG4gIH07XG5cbiAgR2FtZXBsYXkuZ2FtZU92ZXIgPSBmdW5jdGlvbih0b2tlbikge1xuICAgICQoJzxkaXYgLz4nLCB7dGV4dDogdG9rZW4gKyAnIHdpbnMhJywgJ2NsYXNzJzogJ3dpbm5lci13aW5uZXItd2hhdHMtZm9yLWRpbm5lcid9KS5wcmVwZW5kVG8oJy5nYW1lYm9hcmQnKTtcbiAgfTtcblxuICBHYW1lcGxheS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgYmluZFVJQWN0aW9ucygpO1xuICB9O1xuXG59KHdpbmRvdy5HYW1lcGxheSA9IHdpbmRvdy5HYW1lcGxheSB8fCB7fSwgalF1ZXJ5KSk7XG4iLCIoZnVuY3Rpb24oTWVzc2FnZXMsICQsIHVuZGVmaW5lZCkge1xuXG4gIC8vIFByaXZhdGVcbiAgdmFyIGhvc3QgPSBsb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKTtcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChob3N0KTtcblxuICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgdmFyIHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgR2FtZXBsYXlbcGFyc2VkTWVzc2FnZS5ldmVudFR5cGVdKHBhcnNlZE1lc3NhZ2UpO1xuICB9O1xuXG4gIC8vIFB1YmxpY1xuICBNZXNzYWdlcy5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB3cy5zZW5kKHNlcmlhbGl6ZWREYXRhKTtcbiAgfTtcblxufSh3aW5kb3cuTWVzc2FnZXMgPSB3aW5kb3cuTWVzc2FnZXMgfHwge30sIGpRdWVyeSkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gIEdhbWVwbGF5LmluaXQoKTtcblxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==