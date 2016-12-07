<%@ Assembly Name="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WikiEditPage" MasterPageFile="~masterurl/default.master"      MainContentID="PlaceHolderMain" %>
<%@ Import Namespace="Microsoft.SharePoint.WebPartPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ProjectProperty Property="Title" runat="server" />
	<SharePoint:ListItemProperty runat="server" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server">
	<SharePoint:AlphaImage ID=onetidtpweb1 Src="/_layouts/15/images/wiki.png?rev=44" Width=145 Height=54 Alt="" Runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<base href="/sites/spa/SitePages/ng2/Employee.aspx">
	<meta name="CollaborationServer" content="SharePoint Team Web Site" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/5.0.1/css/fabric.min.css">
	<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.2.0/css/fabric.components.min.css">
	<link rel="stylesheet" href="./static/app.styles.css">
	<SharePoint:ScriptBlock runat="server">
		var navBarHelpOverrideKey = "WSSEndUser";
	</SharePoint:ScriptBlock>
	<SharePoint:RssLink runat="server" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMiniConsole" runat="server">
	<SharePoint:FormComponent TemplateName="WikiMiniConsole" ControlMode="Display" runat="server" id="WikiMiniConsole" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderLeftActions" runat="server">
	<SharePoint:RecentChangesMenu runat="server" id="RecentChanges" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<span id="wikiPageNameDisplay" style="display: none;" runat="server">
		<SharePoint:ListItemProperty runat="server"/>
	</span>
	<span style="display:none;" id="wikiPageNameEdit" runat="server">
		<asp:TextBox id="wikiPageNameEditTextBox" runat="server" />
	</span>
	<div>
		<o365-app>
			<div class="app-loading">
				<img src="./static/squares.gif" width="60" alt="Loading"><br> &nbsp;&nbsp; Loading Application...
			</div>
		</o365-app>
		<!-- Place the compiled Js below-->
		<script type="text/javascript" src="./polyfills.[hash].js"></script>
		<script type="text/javascript" src="./vendor.[hash].js"></script>
		<script type="text/javascript" src="./app.[hash].js"></script>
	</div>
	<SharePoint:VersionedPlaceHolder UIVersion="4" runat="server">
		<SharePoint:SPRibbonButton id="btnWikiEdit" RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Edit" runat="server" Text="edit" />
		<SharePoint:SPRibbonButton id="btnWikiSave" RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.SaveAndStop" runat="server" Text="edit" />
		<SharePoint:SPRibbonButton id="btnWikiRevert" RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Revert" runat="server" Text="Revert" />
	</SharePoint:VersionedPlaceHolder>
	<SharePoint:EmbeddedFormField id="WikiField" FieldName="WikiField" ControlMode="Display" runat="server" />
	<WebPartPages:WebPartZone runat="server" ID="Bottom" CssClass="ms-hide" Title="loc:Bottom" />
</asp:Content>