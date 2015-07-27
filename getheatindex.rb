# http://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml
def full_heat_index(temp, rh)
   (-42.379 + (2.04901523*temp) + (10.14333127*rh) - (0.22475541*temp*rh) - (0.00683783*temp*temp) - (0.05481717*rh*rh) + (0.00122874*temp*temp*rh) + (0.00085282*temp*rh*rh) - (0.00000199*temp*temp*rh*rh)).to_i
end

def simple_heat_index(temp, rh)
  (@simple_hi = 0.5 * (temp + 61 + ((temp-68)*1.2) + (rh*0.094))).to_i
end

def low_huminity_high_heat_adjustment(temp,rh)
  (((13-rh)/4)*((17-((temp-95).abs))/17)**0.5).to_i
end

def high_huminity_high_heat_adjustment(temp,rh)
  (((rh-85)/10) * ((87-temp)/5)).to_i
end

def low_huminidity_and_hot?(temp,rh)
  ((rh < 13) && (temp >= 80) && (temp < 112))
end

def high_humidity_and_hot?(temp,rh)
  ((rh > 85) && (temp >= 80) && (temp <= 87))
end

def runner(temp, rh)
  if (@simple_hi.to_i+temp)/2 >= 80
    # apply full regression equation with or without adjustments
    if low_huminidity_and_hot?(temp,rh)
      puts full_heat_index(temp, rh)-low_huminity_high_heat_adjustment(temp,rh)
    elsif high_humidity_and_hot?(temp,rh)
      puts full_heat_index(temp, rh)-high_huminity_high_heat_adjustment(temp,rh)
    else
      puts full_heat_index(temp, rh)
    end
  else
    # return simple heat index
    puts simple_heat_index(temp, rh)
  end
end # ends runner

runner(82,10)

# if the RH is less than 13% and the temperature is between # #80 and 112 degrees F, then the following adjustment is # #subtracted from HI:
# ADJUSTMENT = ((13-rh)/4) * SQRT{[17-((temp-95).abs)]/17}

# On the other hand, if the RH is greater than 85% and the temperature is between 80 and 87 degrees F, then the following adjustment is added to HI:
# ADJUSTMENT = ((RH-85)/10) * ((87-T)/5)