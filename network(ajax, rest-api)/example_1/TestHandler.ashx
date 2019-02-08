<%@ WebHandler Language="C#" Class="TestHandler" %>

using System;
using System.Web;

public class TestHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        System.Threading.Thread.Sleep(3000);
        context.Response.Write("Hello World" + DateTime.Now.ToLocalTime());
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}
