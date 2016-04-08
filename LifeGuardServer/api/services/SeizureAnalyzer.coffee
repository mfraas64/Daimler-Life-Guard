module.exports =
  warntimeSeizure: null

  analyze: (isSeizure) ->
    warning = false
    critical = false
    date = Date.now()

    if sensorAnalyzers.isSeizure
      warning = true
      if this.warntime == null
        this.warntimeSeizure = date
      if (date - this.warntimeSeizure) >= 5000
        critical = true

    seizureWarning: warning
    seizureCritical: critical

