var cookies = 0
document.getElementById('cookieId').onclick = function()
{
  cookies+=1
  document.getElementById('num_cookies').innerHTML = cookies
}