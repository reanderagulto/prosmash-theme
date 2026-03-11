$files = Get-ChildItem -Path "templates" -Filter "*.json"

$targetColors = @{
    "bg_color" = '"bg_color": "#0B0A0A"';
    "icon_color" = '"icon_color": "#ffffff"';
    "discount_color" = '"discount_color": "#ffffff"';
    "work_time_color" = '"work_time_color": "#ffffff"'
}

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content

    # Check if the file contains mdp-weare-menu-2
    if ($content -match "mdp-weare-menu-2") {
        # Replace bg_color
        $content = [regex]::Replace($content, '"bg_color": "#[0-9a-fA-F]{6}"', $targetColors["bg_color"])
        
        # Replace icon_color
        $content = [regex]::Replace($content, '"icon_color": "#[0-9a-fA-F]{6}"', $targetColors["icon_color"])
        $content = [regex]::Replace($content, '"icon_color": "[0-9a-fA-F]{6}"', $targetColors["icon_color"])
        
        # Replace discount_color
        $content = [regex]::Replace($content, '"discount_color": "#[0-9a-fA-F]{6}"', $targetColors["discount_color"])
        $content = [regex]::Replace($content, '"discount_color": "[0-9a-fA-F]{6}"', $targetColors["discount_color"])
        
        # Replace work_time_color
        $content = [regex]::Replace($content, '"work_time_color": "#[0-9a-fA-F]{6}"', $targetColors["work_time_color"])
        $content = [regex]::Replace($content, '"work_time_color": "[0-9a-fA-F]{6}"', $targetColors["work_time_color"])
        
        if ($content -ne $originalContent) {
            Set-Content -Path $file.FullName -Value $content
            Write-Host "Updated: $($file.Name)"
        } else {
            Write-Host "Already correct: $($file.Name)"
        }
    }
}

Write-Host "`nAll files processed. Done!"