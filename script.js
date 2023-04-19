let ventas = [];

      function agregarVenta() {
        const producto = document.getElementById('producto').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const valor = parseInt(document.getElementById('valor').value);

        if (producto.trim() === '' || isNaN(cantidad) || isNaN(valor)) {
          alert('Debe ingresar un producto, una cantidad y un valor válido');
          return;
        }

        const venta = {
          producto: producto,
          cantidad: cantidad,
          valorUnitario: valor
        };

        ventas.push(venta);

        document.getElementById('producto').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('valor').value = '';

        mostrarVentas();
      }

      function mostrarVentas() {
        const tabla = document.getElementById('tabla-ventas');
        const tbody = tabla.getElementsByTagName('tbody')[0];

        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild);
        }

        ventas.forEach((venta) => {
          const row = tbody.insertRow();
          const productoCell = row.insertCell();
          const cantidadCell = row.insertCell();
          const valorUnitarioCell = row.insertCell();
          productoCell.textContent = venta.producto;
          cantidadCell.textContent = venta.cantidad;
          valorUnitarioCell.textContent = venta.valorUnitario;
        });
      }

      function calcularValorTotalPagar() {
     
      }

      function mostrarTotal() {
        const valorTotal = ventas.reduce((total, venta) => {
            return total + venta.cantidad * venta.valorUnitario;
          }, 0);
          document.getElementById('valor-total').textContent = (valorTotal);
      }

      function calcular() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
    
        if(num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
            alert("No se permiten números iguales.");
            return;
        }
    
        var numeros = [num1, num2, num3, num4];
        var mayor = Math.max.apply(null, numeros);
        var menor = Math.min.apply(null, numeros);
    
        document.getElementById("mayor").innerHTML = mayor;
        document.getElementById("menor").innerHTML = menor;
    
        var indiceMayor = numeros.indexOf(mayor);
        numeros.splice(indiceMayor, 1);
        alert("Se elimino el número mayor, los numeros que han quedado son: " + numeros);
    }

