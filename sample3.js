<html>
<head>
<title>sample3</title>
<body>
<script type="text/javascript">
var rows=prompt("no of rows on the table:");
var cols= prompt("no of cols on your the table:");
if(rows==""||rows==null)
rows=10;
if(cols==""||cols=null)
cols=20;
createTable(rows,cols);
function createTable(rows,cols)
{
  var j=1;
  var output="<table border='1'width='350'cellspacing='0'cellpadding='5'>";
  for(i=1;i<=rows;i++)
  {
    output=output +"<tr>";
    while(j<=cols)
    {
      output=output+"<td>"+i*j+"</td>";
      j=j+1;
    }
    output=output + "</tr>";
    j=1;
  }
  output= output + "</table>";
  document.write(output);
}
</script>
</head>
</body>
</html>
