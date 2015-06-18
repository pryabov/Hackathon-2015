using Microsoft.Azure.WebJobs;

namespace Hackathon_WebJob
{
	public class Functions
	{
		/// <summary>
		/// Reads a message as string for the queue named "inputtext"
		/// Outputs the text in the blob helloworld/out.txt
		/// </summary>
		public static void HelloWorldFunction([QueueTrigger("inputText")] string inputText, [Blob("helloworld/out.txt")] out string output)
		{
			output = inputText;
		}
	}
}
