#Add-AzureAccount
#Get-AzurePublishSettingsFile

#Get-AzureSubscription
#Get-AzureAccount

$AzureSubscriptionName = "9a2326e6-f884-4da6-ae5b-6814d21c8575"

Import-AzurePublishSettingsFile "c:\Projects\SummerLabs\Hackathon-2015\GitHub\Presentation\Scripts\Free Trial-6-14-2015-credentials.publishsettings"
Set-AzureSubscription –SubscriptionId $AzureSubscriptionName

$AzureNewWebSite = "workshop-created-from-ps"

Get-AzureWebsite

New-AzureWebsite $AzureNewWebSite
Get-AzureWebsite -Name $AzureNewWebSite

Stop-AzureWebsite -Name $AzureNewWebSite
Get-AzureWebsite -Name $AzureNewWebSite

Remove-AzureWebsite -Name $AzureNewWebSite
Get-AzureWebsite