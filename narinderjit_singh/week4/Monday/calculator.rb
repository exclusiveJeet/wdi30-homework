=begin You will be building a calculator. A calculator can perform multiple arithmetic operations. 
Your function should allow the user to 
choose which operation is expected, enter in the values to perform the operation on, 
and ultimately view the result.
=end

require "colorize"


def menu
    system "clear"
    puts "\t\t\t\t [a] Addition"
    puts "\t\t\t\t [s] Subtration"
    puts "\t\t\t\t [m] Multiplication"
    puts "\t\t\t\t [d] Division"
    puts "\n\t\t\t Press 'Q' to QUIT"
    print "\n\t\t Select Operation : "
    op = gets.chomp.downcase[0]

    if (op == 'a' || op == 's' || op == 'm' || op== 'd')
        action(op)
    elsif
        op == 'q'
         puts "\n\t\t\t Bye Bye Sweetie. ".green
         exit
    else
        menu()
    end

end

# Declaration of Functions
def action(op)
    system "clear"
    print "\t\t\t\t Enter First Number  : ".cyan
    num1 = gets.to_i
    print "\t\t\t\t Enter Second Number : ".cyan
    num2 = gets.to_i

    case op
    when 'a'
        puts "\n\t\t\t\t Result of #{num1} + #{num2} is = #{num1+num2}"
    when 's'
        puts  puts "\n\t\t\t\t Result of #{num1} - #{num2} is = #{num1-num2}"
    when 'm'
        puts  puts "\n\t\t\t\t Result of #{num1} * #{num2} is = #{num1*num2}"
    when 'd'
        puts  puts "\n\t\t\t\t Result of #{num1} / #{num2} is = #{num1/num2}"
    end
    
end

#-------------------------------------
menu()

